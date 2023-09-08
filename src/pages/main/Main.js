import React from 'react'
import Analytics from '../../components/Analytics/Analytics'
import './Main.css'
import Traffic from '../../components/Traffic/Traffic'
import ChartArea from '../../components/chartArea/ChartArea'

const Main = () => {
  return (
    <div className='main'>
        <div>
            <Analytics/>
        </div>
       
        <div>
            <ChartArea/>
        </div>
        <div>
            <Traffic/>
        </div>
    </div>
  )
}

export default Main