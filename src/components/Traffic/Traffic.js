import React from 'react'
import './Traffic.css'

const Traffic = () => {
    return (
        <div className='traffic'>
            <main>
                <h1>Traffic by socials</h1>
                <ul>
                    <li>
                        <img alt='img' src='/images/icons8-linkedin-48.png' /><p></p>
                        <strong>22.5k</strong>
                    </li>
                    <li>
                       <img alt='img' src='/images/icons8-google-48.png' /><p></p>
                        <strong>22.5k</strong>
                    </li>
                    <li>
                       <img alt='img' src='/images/icons8-facebook-48.png' /><p></p>
                        <strong>22.5k</strong>
                    </li>
                    <li>
                       <img alt='img' src='/images/icons8-twitter-48.png' /><p></p>
                        <strong>22.5k</strong>
                    </li>
                </ul>
            </main>
            <main>
                <h1>Traffic by Browsers</h1>
                <ul>
                    <li>
                        <img alt='img' src='/images/chrome.png' /><p>Chrome</p>
                        <strong>22.5k</strong>
                    </li>
                    <li>
                        <img alt='img' src='/images/icons8-opera-48.png' />Opera<p></p>
                        <strong>22.5k</strong>
                    </li>
                    <li>
                        <img alt='img' src='/images/icons8-safari-48.png' />Safari<p></p>
                        <strong>22.5k</strong>
                    </li>
                    <li>
                        <img alt='img' src='/images/icons8-firefox-48.png' /><p>Firefox</p>
                        <strong>22.5k</strong>
                    </li>
                    <li>
                        <img alt='img' src='/images/edge.png' /><p>Firefox</p>
                        <strong>22.5k</strong>
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default Traffic