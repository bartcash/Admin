import "./singleProduct.css"
import { Sidebar, Topbar } from "../../components"
import { pic1 } from "../../constants/images"

const SingleProduct = ({title}) => {
  return (
    <main className="single__product">
        <Sidebar/>
      <section className="single__cont">
        <Topbar title={title}/>

        <section className="single__main">

          <div className="single__owner"> 

          <h4>Owner</h4>

            <div className="single__owner-owner">

              <img src={pic1} alt="" className="single__owner-img"/>

              <p>Jerry Martins</p>
              <span>view profile</span>

            </div>
          </div>


          {/* <section className="single__product">
              <div className="single__product-left">
                <h4>Name of Product</h4>
                <span>HP Chromebook</span>
                <h4>Price</h4>
                <span>$230</span>
              </div>
              <div className="single__product-right">
              <h4>Category</h4>
                <span>Electronics and Accessories</span>
                <h4>Condition</h4>
                <span>2 months used</span>
              </div>
          </section> */}

        </section>


     
      </section>
    </main>
  )
}

export default SingleProduct
