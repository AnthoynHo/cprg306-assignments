import Link from 'next/link'
import Header from './Header'


export default function Home() {
  return (  
    <>
      <header>
        <Header title="CPRG 306: Web Development 2 - Assignments" />
      </header>
      <div> 
      <p>
        <Link href="/week2">Week 2</Link>
      </p>
      <p>
        <Link href="/week3">Week 3</Link>
      </p>
      <p>
        <Link href="/week4">Week 4</Link>
      </p>
      <p>
        <Link href="/week5">Week 5</Link>
      </p>
      <p>
        <Link href="/week6">Week 6</Link>
      </p>
      </div>
    </>
  )
}