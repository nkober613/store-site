import styles from "../HomePage.module.css"
import { useEffect, useState } from "react"
import { products } from "../data/products"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Home() {
  const [items, setItems]= useState([])

  useEffect(() => {
    setItems(products)
  }, [])

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.grid}>
          {items.map(p => (
            <Link
              key={p.id}
              to={`/products/${p.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.card}>
                <img src={p.image} className={styles.image} />
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.price}>${p.price}</p>
              </div>
            </Link>
          ))}
    </div>
    </div>
    </div>
  )
}
