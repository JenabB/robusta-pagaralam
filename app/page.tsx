import Navbar from './components/Navbar'
import Header from './components/home/Header'
import Description1 from './components/home/Description1'
import Description2 from './components/home/Description2'
import Description3 from './components/home/Description3'
import Description4 from './components/home/Description4'

export default function Home() {
  return (
    <main
    //  className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Navbar />
      {/* <Header /> */}
      <Description1 />
      <Description2 />
      <Description3 />
      <Description4 />
    </main>
  )
}
