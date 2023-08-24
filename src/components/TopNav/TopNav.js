import React, { useEffect, useState } from 'react'
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
          <div>
            <img alt='profile' src='/images/profile.png' />
            <h2>
              {data.username}
            </h2>
          </div>
        </section>
      }
    </>

  )
}

export default TopNav