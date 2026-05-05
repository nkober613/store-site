import styles from "../ProductPage.module.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { products } from "../data/products"
import Navbar from "../components/Navbar"

export default function Product() {
  const {id}= useParams()
  const [product, setProduct]= useState(null)

  useEffect(() => {
    const found = products.find(p => p.id === id)
    setProduct(found)
  }, [id])

  if (!product) return <p>Loading...</p>
  return(
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.productBox}>
        <img
        src={product.image}
        className={styles.image}
        alt={product.name}
        />
          <div className={styles.details}>
            <h1 className={styles.name}>{product.name}</h1>
            <h2 className={styles.price}>${product.price}</h2>
            <p className={styles.description}>
              {product.description}
            </p>
          </div>
    </div>
    </div>
    </div>
  )
}