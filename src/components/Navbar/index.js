import styles from './Navbar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import classNames from 'classnames'
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri'
import Search from 'components/Search'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const iconeProps = {
    color: 'white',
    size: 24 
}

export default function Navbar() {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <nav className={styles.nav}>
            <Logo className={styles.logo} onClick={() => navigate('/')} />

            <div className={styles.links}>
                <div >
                    <Link to='/' className={classNames(styles.link, {
                    [styles.selected]: location.pathname === '/'
                    })}>
                        Pagina inicial
                    </Link>
                </div>
            </div>
            <div className={styles.busca}>
                <Search />
            </div>
            <div className={styles.icones}>
                <div >
                    <Link to='/carrinho'>
                        {location.pathname === '/carrinho'
                            ? <RiShoppingCart2Line {...iconeProps}/>
                            : <RiShoppingCartFill {...iconeProps}/>
                        }
                    </Link>
                </div>
            </div>

        </nav>
    )
} 