import { ExitToApp, Dashboard, Notifications, ProductionQuantityLimits, } from '@mui/icons-material'
import { bartcashlogo } from '../../constants/images'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <section className='sidebar'>
     
      <div className='sidebar__div'>
        <img src={bartcashlogo} alt='' className='sidebar__div-img' height={50} width={100}/>
        <hr/>

        <ul className='sidebar__div-ul'>
          <Link to='/' className='link'>
            <li className='sidebar__div-li'>
              <Dashboard style={{color: 'gray'}}/>
              <span className='sidebar__div-text'>Dashboard</span>
            </li>
          </Link>

          <Link to='/product' className='link'>
            <li className='sidebar__div-li'>
              <ProductionQuantityLimits style={{color: 'gray'}}/>
              <span className='sidebar__div-text'>Product</span>
            </li>
          </Link>

          <Link to='/notifications'  className='link'>
            <li className='sidebar__div-li'>
              <Notifications style={{color: 'gray'}}/>  
            <span className='sidebar__div-text'>Notifications</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className='sidebar__div2'>
        <ExitToApp style={{color: 'gray'}}/>
        <span className='sidebar__div-text'>Logout</span>
      </div>
    </section>
  )
}

export default Sidebar
