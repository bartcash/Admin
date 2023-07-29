import './product.css'
import { Sidebar, DailyProduct, Topbar } from '../../components'
import { dailyProduct } from '../../constants/dummyData'


const Product = () => {
  return (
    <main className='product'>
      <Sidebar/>
      <section className='product__cont'>
        <Topbar/>
            <div className='product__top'>
                <h3>Today</h3>
                <p>SEE MORE</p>
            </div>
          <section className='product__list'>
          {
            dailyProduct.map((products) => (
              <DailyProduct/>
            ))
          }
            </section>

          <hr/>

          <div className='product__top'>
                <h3>Yesterday</h3>
                <p>SEE MORE</p>
            </div>
          <section className='product__list'>
          {
            dailyProduct.map((products) => (
              <DailyProduct/>
            ))
          }
            </section>
      </section>
    </main>
  )
}

export default Product
