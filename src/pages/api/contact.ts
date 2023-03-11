import type { NextApiRequest, NextApiResponse } from "next"
import { google } from "googleapis"
import sendDiscordWebhook from "../../../utils/discordWebhook"

type Response = {
  error: boolean
  message?: string
  data?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const { method } = req
  // O unico metodo que a gente vai aceitar eh o POST
  // pq eh o metodo que o form do site vai usar pra mandar os dados
  if (method === "POST") {
    const { name, email, message } = req.body

    // Aqui a gente vê se o cara mandou os campos obrigatórios pq essa api é pública
    // e não queremos que ela seja usada pra spam
    // se o cara nao mandar os campos obrigatórios a gente retorna um erro
    // da pra melhorar isso com captcha e tal, mas eh so um exemplo
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: true, message: "Missing required fields" })
    }

    let phone = null
    if (req.body.phone) {
      phone = req.body.phone
    }

    try {
      /* Aqui a gente faz a autenticação com a API do Google
       * usando as credenciais que a gente pegou lá no Google Cloud Platform
       * para essa porra funcionar eh necessario habilitar a API do Google Sheets
       * e criar um service account pra essa API, depois disso eh so baixar as
       * credenciais e colocar no arquivo sheets-key.json la no root path do projeto
       * IMPORTANTE: NAO ESQUECA DE ADICIONAR A SERVICE ACCOUNT NA PLANILHA COM PERMISSAO DE ESCREVER
       */
      const client = await google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        keyFile: "sheets-key.json",
      })
      const gsapi = google.sheets({ version: "v4", auth: client })
      /* spreadSheetId: ID da planilha que a gente quer usa, essa ID eh o que vem depois do /d/ do url
       * range: A1:D1 eh a range da planilha que a gente quer usar, no caso a gente quer usar a primeira linha
       * a syntax da range eh da A1 notation, se quiser saber mais sobre isso da uma olhada aqui: https://developers.google.com/sheets/api/guides/concepts#a1_notation
       * includeValuesInResponse: se a gente quer que o objeto de resposta tenha os valores da linha que a gente adicionou
       * valueInputOption: se a gente quer que os valores da linha que a gente adicionou sejam interpretados como raw values ou como formulas
       * insertDataOption: se a gente quer que os valores da linha que a gente adicionou sejam inseridos sobrescrevendo ou não os valores que ja existem na planilha
       * requestBody: os valores que a gente quer adicionar na planilha
       * dentro do requestBody.values a gente passa um array de arrays, cada array dentro do array principal representa uma linha
       * e cada array dentro do array de linhas representa uma coluna
       * no caso a gente ta passando um array com uma linha e 4 colunas
       * a primeira coluna eh o nome, a segunda eh o email, a terceira eh a mensagem e a quarta eh o telefone
       * */
      let data = await gsapi.spreadsheets.values.append({
        spreadsheetId: process.env.SHEET_ID,
        range: "Sheet1!A1:D1",
        includeValuesInResponse: true,
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        requestBody: {
          values: [[name, email, message, phone]],
        },
      })

      sendDiscordWebhook(name, email, message, phone)

      return res
        .status(200)
        .json({ error: false, data: data.data.updates?.updatedData })
    } catch (e: any) {
      // Sim, console log no server side, mas isso eh pra fazer o log com grafana loki e nao pra debugar
      // Se quiser saber mais sobre isso da uma olhada aqui: https://grafana.com/oss/loki/
      // Ou muda pra outra coisa mais util como o sentry
      // Ou manda o log pro cloudwatch, se vira ai
      console.error(e)
      return res.status(500).json({ error: true, message: e.message })
    }
  } else
    return res
      .status(405)
      .json({ error: true, message: "Invalid request method" })
}
