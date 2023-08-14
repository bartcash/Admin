import './notification.css'
import { Sidebar, Topbar } from '../../components'

const Notifications = ({title}) => {

  return (
    <main className='notification'>
      
        <Sidebar/>

        <section className='notification__cont'>
            <Topbar title={title}/>
            Notifications
        </section>
    </main>
  )
}

export default Notifications
