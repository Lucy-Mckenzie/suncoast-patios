import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex justify-center w-full'>
      <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400}/>
    </div>
  )
}
