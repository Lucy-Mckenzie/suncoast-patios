import Products from './components/home/Products'
import Reviews from './components/home/Testimonials'
import TradeMark from './components/home/TradeMark'
import FAQ from './components/home/FAQ'
import LandingPage from './components/home/Landing'

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <LandingPage />
      <Products />
      <Reviews /> 
      <TradeMark />
      <FAQ />
    </div>
  )
}
