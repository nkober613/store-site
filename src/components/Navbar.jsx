import styles from "../NavBar.module.css"
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>
        Store
      </Link>
    </nav>
  )
}