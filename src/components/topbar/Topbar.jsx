import './topbar.css'
import { avater } from '../../constants/images'

const Topbar = () => {
  return (
    <nav className='topbar'>

      <div className='topbar__cont'>
        <h2>Dashboard</h2>
        <div className='topbar__div'>
          <img src={avater} alt='' className='topbar__img'/>
          <p>Sam Wayne</p> 
        </div>
      </div>
    </nav>
  )
}

export default Topbar
