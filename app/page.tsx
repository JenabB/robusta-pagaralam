'use client'
import Navbar from './components/Navbar'
import Header from './components/home/Header'
import Description1 from './components/home/Description1'
import Description2 from './components/home/Description2'
import Description3 from './components/home/Description3'
import Description4 from './components/home/Description4'
import Featured from './components/home/Featured'
import RegisteredOn from './components/home/RegisteredOn'
import Footer from './Footer'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Product from './product/Products'
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'
import Faqs from './faqs/Faqs'


export default function Home() {
  return (
    <main
    >

      <FloatingWhatsAppButton />
      <Navbar />
      <Header />

      <Featured />
      <Description1 />
      <Description2 />
      <Description3 />
      <Description4 />
      <Gallery />
      <Faqs />
      <RegisteredOn />
      <AboutUs />
      <footer>
        <Footer />
      </footer>

    </main>
  )
}
