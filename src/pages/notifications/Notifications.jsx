import './notification.css'
import { Sidebar, Topbar } from '../../components'

const Notifications = () => {
  return (
    <main className='notification'>
        <section>
            <Sidebar/>
        </section>
        <section className='notification__cont'>
            <Topbar/>
            Notifications
        </section>
    </main>
  )
}

export default Notifications
