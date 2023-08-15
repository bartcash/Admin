import './notify.css'
import { pic1 } from '../../constants/images'

const Notify = () => {
  return (
    <section className='notify'>
        <section className='notify-cont'>
            <img src={pic1} alt="" className="notify__img" />
            <p>TeeJay wants to post new product</p>
            <span>2 hours ago</span>

        </section>
    </section>
  )
}

export default Notify
