import React from 'react'
import Head from '../../components/head/Head'
import styles from './Contact.module.css'
import picture from '../../img/contact.jpg'

const Contact = () => {
  return (
    <div>
      <Head title='Ranek | Contact'/>
      <div className={styles.contact  + ' animeLeft'}>
        <div><img src={picture} alt="Typewriter" className={styles.picture}/></div>
        <div className={styles.contactData}>
          <h1>Get in touch</h1>
          <ul>
            <li>reactrouter@react.com</li>
            <li>99999-999999</li>
            <li>Anywhere Street</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Contact