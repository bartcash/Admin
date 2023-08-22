import './single.css'


const Single = () => {
  return (
    <section className='single'>
      <section className='single_left'>
        <h5>Name of Product</h5>
        <span className="t">MacBook 2 Pro</span>

        <h5>Price</h5>
        <span className="t">$541</span>
      </section>

      <section className='single_right'>
      <h5>Category</h5>
        <span className="t">Computer an accessories</span>

        <h5>Condition</h5>
        <span className="t">2 months old</span>
      </section>
    </section>
  )
}

export default Single
