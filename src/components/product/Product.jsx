import './product.css';
import { pic1, chromebook } from '../../constants/images';

const DailyProduct = ({products}) => {
    return(
        <section className='d_product'>

            <div className='product__center'>
                <img src={pic1} alt=''  className='product__center-img'/>
                <p>{products.seller}</p>
            </div>

            <div className="product__btm">
                <img src={chromebook} alt='' className="product__btm-img"/>
                {/* <p>{products.product}</p> */}
                <p>Jerry Martins</p>

            </div>
        </section>
    )
}

export default DailyProduct
