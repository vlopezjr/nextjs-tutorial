import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export default function Home() { 
  return (
    <main>
      <h1>NextJs Home Page</h1>
      <Link href="/about">Link to About Page</Link>
    </main>
  )
}
