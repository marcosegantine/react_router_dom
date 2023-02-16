import React from 'react'
import styles from './Card.module.css'

const Card = ({data}) => {
  return (
    <>
        {data &&
          data.map((item) => (
            <div key={item.id} className={styles.card}>
              
                <img src={item.fotos[0].src} alt={item.nome} />
              
              <p>{item.nome}</p>
            </div>
          ))}
      </>
  )
}

export default Card