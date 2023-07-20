import './home.css'
import { Sidebar, Topbar, Widget, Piechart, Chart } from '../../components'


const Home = () => {
  return (
    <main className='home'>
      <Sidebar/>
      <section className='homeContainer'>
        <Topbar/>
        <section className='home__widget'>
        <Widget/>
        <Widget/>
        <Widget/>
        </section>

        <section className='home__chart'>
          <Chart/>
          <Piechart/>
        </section>
      </section>
    </main>
  )
}

export default Home
