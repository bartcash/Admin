import './product.css';
import { pic1, chromebook } from '../../constants/images';

const DailyProduct = () => {
    return(
        <section className='d_product'>

            <div className='product__center'>
                <img src={pic1} alt=''  className='product__center-img'/>
                <p>Jerry Martins</p>
            </div>

            <div className="product__btm">
                <img src={chromebook} alt='' className="product__btm-img"/>
                <p>Macbook 6 Pro</p>
            </div>
        </section>
    )
}

export default DailyProduct
