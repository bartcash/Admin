import './topbar.css'
import { pic1 } from '../../constants/images';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Menu = () => (
  <>
  <Link to='/' className='link'>
    <span>Dashboard</span>
  </Link>
  <Link to='/product' className='link'>
    <span>Product</span>
  </Link>
  <Link to='/notifications' className='link'>
    <span>Notifications</span>
  </Link>
    <span>Logout</span>
  </>
)

const Topbar = ({title}) => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='topbar'>

      <section className='topbar__menu'>
        {
          toggle ? 
          <RiCloseLine color='#001D3D' size={27} onClick={()=>setToggle(false)}/> :
           <RiMenu3Line color='#001D3D' size={27} onClick={()=>setToggle(true)}/>
        }

        {
          toggle && (
            <section className='topbar__menu-section scale-up-center'>
              <section className='topbar__menu-section-cont'>
                <Menu/>
      
              </section>
            </section>
          )
        }

      </section>

      <div className='topbar__cont'>
        <h2>{title}</h2>
        <div className='topbar__div'>
          <img src={pic1} alt='' className='topbar__img'/>
          <p>Sam Wayne</p> 
        </div>
      </div>
    </nav>
  )
}

export default Topbar
