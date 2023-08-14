import './productlist.css'
import { Sidebar, Topbar, DailyProduct } from '../../components'
import { dproducts } from '../../constants/dummyData'

const ProductList = ({title}) => {
  return (
    <main className='productList'>
    <Sidebar/>

    <section className='productlist_cont'>
      <Topbar title={title}/>

        <div className='product__top'>
            <h3>Today</h3>
        </div>

        <section className='product__list'>
          {
            dproducts.slice(0, 12).map((products) => (
              <DailyProduct products={products} key={products.id}/>
            ))
          }
            </section>
    </section>
    </main>
  )
}

export default ProductList
