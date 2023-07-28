import './topbar.css'
import { avater } from '../../constants/images';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react';

const Menu = () => (
  <>
    <span>Dashboard</span>
    <span>Product</span>
    <span>Notifications</span>
    <span>Logout</span>
  </>
)

const Topbar = () => {

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
