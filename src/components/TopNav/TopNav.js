import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './TopNav.css'

const TopNav = () => {
  const user = localStorage.getItem('data')
  const [data, setData] = useState(JSON.parse(user))
  return (
    <>
      {
        data && <section className='topNav'>
          <header>
            <h1></h1>
          </header>
            <Link to='/profile' style={{textDecoration: 'none', color:'inherit'}}>
          <div>
              <img alt='profile' src='/images/profile.png' />
              <h2>
                {data.username}
              </h2>
          </div>
          </Link>
        </section>
      }
    </>

  )
}

export default TopNav