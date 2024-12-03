import { Link, usePathname } from '@/components/shared/nextjsImports'

export default function ReusableLinks() {
  const pathname = usePathname()

  return (
    <ul>
      <li>
        <Link
          className={`${pathname === '/introduction' ? 'active' : ''}`}
          href="/introduction"
        >
          Introduction
        </Link>
      </li>
      <li>
        <Link
          className={`${pathname === '/character' ? 'active' : ''}`}
          href="/character"
        >
          Character
        </Link>
      </li>
      <li>
        <Link
          className={`${pathname === '/initiald_product' ? 'active' : ''}`}
          href="/initiald_product"
        >
          Initial D -Product-
        </Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/channel/UCQVIu3xFONMRGmoU88UFlqA">
          Youtube
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Finitiald-portal.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&amp;text=%E9%A0%AD%E6%96%87%E5%AD%97D%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%20%7C%20%E9%A0%AD%E6%96%87%E5%AD%97D%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BAPKG%2FCD%20Official%20website&amp;url=https%3A%2F%2Finitiald-portal.com%2F">
          Twitter
        </Link>
      </li>
    </ul>
  )
}
