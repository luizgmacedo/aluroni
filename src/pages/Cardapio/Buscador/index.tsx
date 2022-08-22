import React from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

const Buscador = ({ busca, setBusca }: Props) => {
    return (
        <div className={styles.buscador}>
            <input
                value={busca}
                onChange={evento => setBusca(evento.target.value)}
                type="text"
                placeholder="Buscar"
            />
            <CgSearch size={20} color="#4C4D5F" />
        </div>
    );
};

export default Buscador;