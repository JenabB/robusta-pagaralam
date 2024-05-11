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
import ProductHighlight from './components/ProductHighlight'
import GalleryV2 from './components/GalleryV2'
import Title from './components/Title'
import AwardsandCertificates from './components/AwardsandCertificates'
import FazzaGrid from './components/FazzaGrid'
import ShippingPort from './components/ShippingPort'
import RibbonText from './components/RibbonText'
import Payment from './components/Payment'


export default function Home() {
  return (
    <main
    >
      <RibbonText />
      <FloatingWhatsAppButton />
      <Navbar />
      <Header />
      {/* <Featured /> */}

      <ProductHighlight />
      {/* <Description1 />
      <Description2 />
      <Description3 />
      <Description4 /> */}
      <Payment />
      <AwardsandCertificates />
      <FazzaGrid />
      <hr className='mb-14' />
      {/* <Title text='Gallery' /> */}

      {/* <div className='mb-10'></div>
      <GalleryV2 /> */}
      <div className='mt-12'></div>

      <Title text="Enjoy our journey" />
      <div className='mb-8'></div>
      <Gallery />
      <hr />
      <ShippingPort />
      <hr className='mb-14' />
      <Faqs />
      <div className='mt-24'></div>
      <Title text="We Are Registered On" />
      <RegisteredOn />
      <AboutUs />
      <Footer />

    </main>
  )
}
