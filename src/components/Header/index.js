import styles from './Header.module.scss';
import TituloSemImagem from './TituloSemImagem'
import TituloComImagem from './TituloComImagem'

export default function Header({ title, description, className = '', image}) {
  return (
    <header className={styles.header}>
      {title && !image && 
        <TituloSemImagem 
          title={title}
          description={description}
        />
      }

      {title && image && 
        <TituloComImagem 
          titlr={title}
          description={description}
          image={image}
          className={className}
        />
      }
    </header>
  )
}