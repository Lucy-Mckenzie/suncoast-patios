import Image from 'next/image'
import Products from './components/Products'

export default function Home() {
  return (
    <div className='flex flex-col  w-full'>
      <div className='flex justify-center'>
      <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400}/>
      </div>
      <Products />
    </div>
  )
}
