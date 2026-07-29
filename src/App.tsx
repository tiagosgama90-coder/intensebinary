import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Mission } from './components/Mission'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { CtaBanner } from './components/CtaBanner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Mission />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
