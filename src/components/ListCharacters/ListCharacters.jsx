import { useState } from "react";
import styles from './ListCharacters.module.scss'
import listHeroes from '../../data/theBoyCharactersList.json'
import { TiDelete } from 'react-icons/ti';

const ListCharacters = () => {
    const [heroesList, setHeroesList] = useState(listHeroes);

    const handleDeleteHeroe = (id) => {
        const newListHeroes = heroesList.filter((heroe) => heroe.id !== id)
        setHeroesList(newListHeroes)

    }
    return (<>
        <div className={styles.container} >
<h2 className={styles.title}>The Boys Heroes</h2>
        <div className={styles.ulBox}>
            <ul className={styles.list}>
                {heroesList.map(({ id, name }) => {
                    return (
                        <li key={id} className={styles.items}>
                            <span className={styles.name}>{name}</span>
                            <button className={styles.delButton} onClick={() => handleDeleteHeroe(id)}><TiDelete className={styles.delItem} /></button>
                        </li>
                    )
                })}
                
            </ul>
        </div>
        </div>
        
    
    </>)

}

export default ListCharacters