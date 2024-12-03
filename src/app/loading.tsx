import styles from "@/styles/loading/Loading.module.scss"

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.animLine} />
    </div>
  )
}
