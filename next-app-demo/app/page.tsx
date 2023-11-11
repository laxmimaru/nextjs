import Image from 'next/image'
import Link from 'next/link'
import ProductsCart from './users/components/ProductCard/ProductsCart'

export default function Home() {
  return (
    <main >
      <h1>Hello to next js demo</h1>
      <Link href='/users'>Users</Link>
      <ProductsCart></ProductsCart>
    </main>
  )
}
