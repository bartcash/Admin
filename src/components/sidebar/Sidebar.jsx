import { ExitToApp, Grid4x4, Dashboard, Notifications, ProductionQuantityLimits } from '@mui/icons-material'
import { bartcashlogo } from '../../constants/images'
import './sidebar.css'

const Sidebar = () => {
  return (
    <section className='sidebar'>
     
      <div className='sidebar__div'>
        <img src={bartcashlogo} alt='' className='sidebar__div-img' height={50} width={100}/>
        <hr/>
        <ul className='sidebar__div-ul'>
          <li className='sidebar__div-li'>
            <Dashboard/>
            <span>Dashboard</span>
          </li>

          <li className='sidebar__div-li'>
            <ProductionQuantityLimits/>
            <span>Product</span>
          </li>

          <li className='sidebar__div-li'>
            <Notifications/>
           <span>Notifications</span>
          </li>
        </ul>
      </div>

      <div className='sidebar__div2'>
        <ExitToApp/>
        <span>Logout</span>
      </div>
    </section>
  )
}

export default Sidebar
