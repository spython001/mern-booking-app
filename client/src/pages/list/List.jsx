import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './list.scss'

export default function List() {
  return (
    <div className='list'>
      <Navbar/>
      <Header type='list'/>
    </div>
  )
}
