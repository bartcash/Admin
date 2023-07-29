import './home.css'
import { Sidebar, Topbar, Widget, Piechart, Chart } from '../../components'


const Home = ({title}) => {
  return (
    <main className='home'>
      <Sidebar/>
      <section className='homeContainer'>
        <Topbar title={title}/>
        <section className='home__widget'>
        <Widget type='total'/>
        <Widget type='accepted'/>
        <Widget type='rejected'/>
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
