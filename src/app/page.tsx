import Products from './components/Products'
import Reviews from './components/Reviews'
import TradeMark from './components/TradeMark'
import FAQ from './components/FAQ'
import PhotoCarousel from './components/PhotoCarouselMain'

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      {/* <div className='flex justify-center'>
      <Image src='/demo.png' alt='suncoast patios louvre' width={1200} height={400}/>
      </div> */}
      <PhotoCarousel />
      <Products />
      <Reviews /> 
      <TradeMark />
      <FAQ />
    </div>
  )
}
