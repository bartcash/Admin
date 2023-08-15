import { Sidebar, Topbar } from '../../components'
import './owner.css'
import { pic1 } from '../../constants/images'

const Owner = ({title}) => {
  return (
    <main className='product__owner'>
        <Sidebar/>

        <section className='product__owner-cont'>
            <Topbar title={title}/>
            <img src={pic1} alt="" className="product__owner-img" />

            <section className='inputs'>
                <label htmlFor=''></label>
                <input type='text' placeholder='' id=''/>
            </section>

        </section>
    </main>
  )
}

export default Owner
