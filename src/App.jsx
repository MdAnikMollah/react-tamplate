import { useState } from 'react'
import Navber from './sections/navber/Navber'
import Banner from './sections/banner/Banner'
import Service from './sections/service/Service'
import Experience from './sections/experience/Experience'
import Works from './sections/works/Works'
import Counter from './sections/counter/Counter'
import Company from './sections/company/Company'
import Costomar from './sections/costomar/Costomar'
import Project from './sections/project/Project'
import Footer from './sections/footer/Footer'








function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navber/>
    <Banner/>
    <Service/>
    <Experience/>
    <Works/>
    <Counter/>
    <Company/>
    <Costomar/>
    <Project/>
    <Footer/>
    </>
  )
}

export default App
