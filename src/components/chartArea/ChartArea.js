import React from 'react'
import './Chart.css'
import Piechart from './PieChart'
import BarChart from './Bar'

const ChartArea = () => {
  return (
    <div className='chartArea'>
        <main>
            <Piechart/>
        </main>
        <main className='barss'>
            <BarChart/>
        </main>
    </div>
  )
}

export default ChartArea