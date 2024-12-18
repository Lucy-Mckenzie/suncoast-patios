import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full h-full '>
      <Image src='/demo.png' alt='suncoast patios louvre' width={1300} height={600}/>
    </div>
  )
}
