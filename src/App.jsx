import './App.css'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Smenu from './Components/SpecialMenu/Smenu'
import Tmenu from './Components/TodayMenu/Tmenu'
import Reservation from './Components/Reservation/Reservation'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
      <div className="Header">
        <Nav />
        <Header />
      </div>
      <Smenu />
      <Tmenu/>
      <Reservation/>
      <Testimonial/>
      <Footer/>
    </>
  )
}
export default App
