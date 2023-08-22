import "./singleProduct.css"
import { Sidebar, Topbar, Single,  Description } from "../../components"
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

            <Single/>
            <Description/>
          </div>


  

        </section>


     
      </section>
    </main>
  )
}

export default SingleProduct
