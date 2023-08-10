import { mudarBusca, resetarBusca } from 'store/reducers/busca';
import styles from './Search.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Search() {
    const busca = useSelector(state => state.busca);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(resetarBusca())
    }, [location.pathname, dispatch])
    
    return (
        <div className={styles.search}>
            <input 
                className={styles.input}
                placeholder='O que você procura'
                value={busca}
                onChange={evento => dispatch(mudarBusca(evento.target.value)) }
            />
        </div>
            

    )
} 