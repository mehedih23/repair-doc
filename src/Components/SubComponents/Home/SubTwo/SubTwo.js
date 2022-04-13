import './SubTwo.css'
import React from 'react'

const SubTwo = () => {
    return (
        <div className='sub-container-2'>
            <div>
                <img src="https://i.ibb.co/gRD5HDj/Car-Engine.png" alt="engine" />
            </div>
            <div>
                <div>
                    <h2 className='container-title'>No limits for improvement</h2>
                    <p className='container-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris augue neque. Sapien eget mi proin sed. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Proin libero nunc consequat interdum varius sit. </p>
                    <button>Our Services</button>
                </div>
                <div>
                    <h2>ECU TUNES</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris augue neque. Sapien eget mi proin sed. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Proin libero nunc consequat interdum varius sit. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Gravida neque convallis a cras semper auctor neque vitae. Eu consequat ac felis donec et odio. Mi in nulla posuere sollicitudin aliquam ultrices sagittis.</p>
                </div>
                <div className='info'>
                    <div className='c-info'>
                        <span>C63</span>
                        <span>C-Class</span>
                        <span>2020</span>
                    </div>
                    <div className='stock-info'>
                        <p>
                            Stock
                            <span>120hp</span>
                        </p>
                        <p>
                            Tuned
                            <span>240hp</span>
                        </p>
                        <p>
                            Gains
                            <span>120hp</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SubTwo