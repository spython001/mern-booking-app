import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'

export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>

      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
      </div>
    </div>
  )
}
