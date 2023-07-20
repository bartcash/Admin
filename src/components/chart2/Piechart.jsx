import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'MON',
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'TUES',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'WED',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'THURS',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'FRI',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'SAT',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'SUN',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Piechart = () => {
    return(
      <section className='piechart'>
          <BarChart
          width={500}
          height={420}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
        
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="uv" fill="#ffc658" />
          <Legend />
          <Tooltip />
        </BarChart>
      </section>
      //    <ResponsiveContainer width={450} height={400}>
 
      // </ResponsiveContainer>
    )
}

export default Piechart
