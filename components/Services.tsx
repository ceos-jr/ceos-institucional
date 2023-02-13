import styles from "/styles/Services.module.css"
export default function Services() {
    return (
        <section>
             <div>
                <h1>Serviços</h1>
                <h1>Somos uma pequena equipe de contadores de histórias, pensadores e solucionadores de problemas.</h1>
                <p>Ajudamos a sua empresa a refletir seu verdadeiro eu por meio de projetos inovadores</p>
             </div>
             <div className={styles.div2}>
                <span className={styles.block4}>bloco1</span>
                <span className={styles.block4}>bloco2</span>
                <span className={styles.block4}>bloco3</span>
                <span className={styles.block4}>bloco4</span>
             </div>

        </section>
        
        


    
    )
}