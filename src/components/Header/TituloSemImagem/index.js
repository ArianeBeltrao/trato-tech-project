import styles from './TituloSemImagem.module.scss';

export default function TituloSemImagem({
    title,
    description
}) {
  return (
    <div className={styles.container}>
        <h1 className={styles.titulo}>
            {title}
        </h1>
        <h2 className={styles.descricao}>
            {description}
        </h2>
    </div>
  )
}