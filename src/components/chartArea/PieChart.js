import React from 'react'
import './Piechart.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut} from 'react-chartjs-2'
// import { Bar } from 'react-chartjs-2'
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

function Piechart() {
    const data = {
       
        datasets: [
            {
                data: ['60','20','15', '5'],
                backgroundColor: ['#3D81FF', '#004678', '#3D81FF', '#01e9fc']
            }
        ],
        labels : ['Africa', 'Europe', 'America', 'Asia']
    };

    const options = {
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Pie Chart'
          }
        }
      }

  return (
    <div className='PieChart'> 
        <h1>
            Website Visits
        </h1>
        <div 
        className='pieCon'
        style={{
            fontWeight: '700',
            color: 'black'
        }}>
            <Doughnut
            data={data}
            options={options}
            />
        </div>
        
    </div>
  )
}

export default Piechart