import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to='/'>Products</Link>
        <Link to='contact'>Contact</Link>
      </nav>
    </div>
  )
}

export default Header