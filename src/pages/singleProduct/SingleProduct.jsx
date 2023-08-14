import "./singleProduct.css"
import { Sidebar, Topbar } from "../../components"

const SingleProduct = ({title}) => {
  return (
    <main className="single__product">
        <Sidebar/>
      <section className="single__cont">
        <Topbar title={title}/>
      SingleProduct
      </section>
    </main>
  )
}

export default SingleProduct
