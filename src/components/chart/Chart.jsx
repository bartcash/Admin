import './chart.css'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    total: 1100,
  },
  {
    name: 'Febuary',
    total: 2210,
  },
  {
    name: 'March',
    total: 2290,
  },
  {
    name: 'April',
    total: 2000,
  },
  {
    name: 'May',
    total: 1700,
  },
  {
    name: 'June',
    total: 2500,
  },
];

const Chart = () => {
  return (
 
      <section className='chart'>
        <h4>Products</h4>
      <ResponsiveContainer  width='100%' height='100%'>
        <AreaChart
          width={450}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
         
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#fae20c" fill="lightgray" />
        </AreaChart>
      </ResponsiveContainer>
      </section>

  )
}

export default Chart
