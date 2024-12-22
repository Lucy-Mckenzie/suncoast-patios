import Products from './components/Products'
import Reviews from './components/Reviews'
import TradeMark from './components/TradeMark'
import FAQ from './components/FAQ'
import PhotoCarousel from './components/PhotoCarouselMain'

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <PhotoCarousel />
      <Products />
      <Reviews /> 
      <TradeMark />
      <FAQ />
    </div>
  )
}
