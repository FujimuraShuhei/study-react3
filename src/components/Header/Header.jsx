import React from 'react'
import Link from 'next/link'
import styles from '../Header/Header.module.css'

const NAV_ITEMS = [
  { href: "/" , label: "index" },
  { href: "/about",  label: "about" },
]

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className={styles.anchor}>{item.label}</a>
      </Link>
        )
      })}
    </header>
  );
}

export default Header
