import Products from './components/home/Products'
import Reviews from './components/home/Testimonials'
import TradeMark from './components/home/TradeMark'
import FAQ from './components/home/FAQ'
import PhotoCarousel from './components/home/PhotoCarouselMain'
import Warranty from './components/home/Warranty'

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <PhotoCarousel />
      <Warranty />
      <Products />
      <Reviews /> 
      <TradeMark />
      <FAQ />
    </div>
  )
}
