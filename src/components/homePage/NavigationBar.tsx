import { Image, Link } from "@/components/shared/nextjsImports"

import styles from "@/styles/homePage/HomePage.module.scss"

export default function NavigationBar() {
  return (
    <div className={styles.navigation}>
      <Image
        width={500}
        height={500}
        src="/pictures/userInterface/logoD.webp"
        alt="logoD"
        loading="eager"
        className={styles.navigation__logoD}
      />
      <ul>
        <li className={styles.animOne}>
          <Link href="/introduction">Introduction</Link>
        </li>
        <li className={styles.animTwo}>
          <Link href="/character">Character</Link>
        </li>
        <li className={styles.animThree}>
          <Link href="/initiald_product">Initial D -Product-</Link>
        </li>
        <li className={styles.animFour}>
          <Link href="https://www.youtube.com/channel/UCQVIu3xFONMRGmoU88UFlqA">
            Youtube
          </Link>
        </li>
        <li className={styles.animFive}>
          <Link href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Finitiald-portal.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&amp;text=%E9%A0%AD%E6%96%87%E5%AD%97D%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%20%7C%20%E9%A0%AD%E6%96%87%E5%AD%97D%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BAPKG%2FCD%20Official%20website&amp;url=https%3A%2F%2Finitiald-portal.com%2F">
            Twitter
          </Link>
        </li>
      </ul>
      <section className={styles.videoAd}>
        <div>
          <Image
            width={500}
            height={500}
            src="/pictures/userInterface/videoPreview.png"
            alt="logoD"
            loading="eager"
          />
        </div>
      </section>
    </div>
  )
}
