import { Image } from "@/components/shared/nextjsImports"
import { Product } from "@/types/product/initialdProductType"

import styles from "@/styles/productPage/ProductPage.module.scss"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.productCard}>
      <Image
        width={500}
        height={500}
        src={product.picture}
        alt="product-picture"
        loading="eager"
      />
      <div className={styles.productCard__text}>
        <h4>{product.title}</h4>
        <p>{product.releaseDate}</p>
        <p>{product.price}</p>
        <p>{product.productNumber}</p>
      </div>
      <div className={styles.productCard__button}>
        <p>MORE</p>
        <hr />
      </div>
    </div>
  )
}
