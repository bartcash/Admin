import './description.css'
import { chromebook } from '../../constants/images'

const Description = () => {
  return (
    <section className='desc'>
      <h4>Images</h4>

      <div className="desc_cont">
        <img src={chromebook} alt="product" className="desc_img" />
        <img src={chromebook} alt="product" className="desc_img" />
        <img src={chromebook} alt="product" className="desc_img" />
      </div>

      <span className="desc_text">
        <h6 className="desc_texth6">Description</h6>
        <p className="desc_textp">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolorem atque minus reprehenderit at facilis, provident doloribus, odio assumenda voluptatum tenetur unde natus laborum! Earum ad fuga maxime neque nostrum.
        </p>

        <div className="btns">
            <button>Reject</button>
            <button>Accept</button>
        </div>
      </span>
    </section>
  )
}

export default Description
