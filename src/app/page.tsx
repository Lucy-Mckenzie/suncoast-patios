import Products from './components/Products'
import Reviews from './components/Testimonials'
import TradeMark from './components/TradeMark'
import FAQ from './components/FAQ'
import PhotoCarousel from './components/PhotoCarouselMain'
import Steps from './components/Steps'

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <PhotoCarousel />
      <Products />
      <Reviews /> 
      <TradeMark />
      <Steps />
      <FAQ />
    </div>
  )
}
