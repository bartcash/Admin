import './notification.css'
import { Sidebar, Topbar, Notify } from '../../components'
import { Switch } from '@mui/material'

const Notifications = ({title}) => {

  return (
    <main className='notification'>
      
        <Sidebar/>

        <section className='notification__cont'>
            <Topbar title={title}/>

            <div className='product__top'>
                <span className='product-text'>Mark as read</span>
                <p className='product-text'>Turn off notification <Switch/></p>
            </div>

            <Notify/>
            <Notify/>
            <Notify/>
            <Notify/>
            <Notify/>
            <Notify/>
            <Notify/>
          
        </section>
    </main>
  )
}

export default Notifications
