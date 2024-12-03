import ProductCard from "./ProductCard"

import { Product } from "@/types/product/initialdProductType"

import styles from "@/styles/productPage/ProductPage.module.scss"

export default function AllProducts({ products }: { products: Product[] }) {
  return (
    <div className={styles.products__all}>
      {products.map((product: Product) => (
        <ProductCard key={product.productNumber} product={product} />
      ))}
    </div>
  )
}
