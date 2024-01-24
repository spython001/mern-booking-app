import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/featuredProperties'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.scss'

export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>

      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className='homeTitle'>Home guests love</h1>
        <FeaturedProperties/>
      </div>
    </div>
  )
}
