const hexToDecimal = (hex: string) => parseInt(hex.replace("#", ""), 16)

const sendDiscordWebhook = (
  name: string,
  email: string,
  message: string,
  phone?: string
) => {
  // Mais uma vez, se quiser saber mais como customizar leia a documentacao seu vagabundo
  // https://discord.com/developers/docs/resources/webhook#execute-webhook
  // Unica coisa que vou explicar eh o allowed_mentions, que eh o que vai fazer o @everyone funcionar
  // O allowed_mentions eh um objeto que tem um array de roles, e o @Marketing eh um role
  // Entao a gente passa o id do role do @Marketing no array de roles e o discord vai entender que a gente quer mencionar o @Marketing
  // E tem que marcar dentro do content tambem, se nao o discord nao vai entender que a gente quer mencionar o @Marketing
  // Se quiser saber mais sobre o allowed_mentions da uma olhada aqui: https://discord.com/developers/docs/resources/channel#allowed-mentions-object
  const embed = {
    title: "Time to make money motherfuckers!!!",
    description:
      "Um novo lead foi adicionado na planilha de leads, vamos fazer o dinheiro rolar",
    color: hexToDecimal("#FF9100"),
    image: {
      url: "https://media.giphy.com/media/Wy74gtZEwN1ItsyuxD/giphy.gif",
    },
    fields: [
      {
        name: "Nome",
        value: name,
        inline: true,
      },
      {
        name: "Email",
        value: email,
        inline: true,
      },
      {
        name: "Telefone",
        value: phone ?? "N/A",
        inline: true,
      },
      {
        name: "Mensagem",
        value: message,
        inline: false,
      },
      {
        name: "Tempo",
        value: new Date().toLocaleString("pt-BR"),
        inline: false,
      },
    ],
  }

  fetch(process.env.DISCORD_WEBHOOK_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `Um novo lead de ${name} <@&617348520856256533>`,
      allowed_mentions: {
        roles: ["617348520856256533"],
      },
      embeds: [embed],
    }),
  })
}

export default sendDiscordWebhook
