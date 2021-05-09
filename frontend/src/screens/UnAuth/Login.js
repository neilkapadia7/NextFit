import React from 'react'
import {Link} from 'react-router-dom'


const Login = () => {
    

    return (
        <div>
            <div className='unauth-header-div'>
                <h1 className='unauth-title'>Workout like a PRO</h1>
                <p className='unauth-description'>We provide modern managing tools to help you jump start your management process. Make most of the free resourse available.</p>
            </div>

            <div className='unauth-3-sec'>
                <div className='unauth-sec unauth-sec1'>
                    <div className='unauth-card-container'>
                        <div className='unauth-card-icon unauth-bg-white'>
                            <i class="fas fa-tasks"></i>
                        </div>
                        <p className='unaut-card-title unauth-white'>List Down Goals</p>
                        <p className='unaut-card-description unauth-off-white'>Our platform enables you to list down and maintain your personal information like calories, workouts details, daily weight tracking, allowing you to accelerate your progress.</p>
                        <Link to='/' className='unauth-button unauth-black unauth-bg-white'>Create Account</Link>
                    </div>
                </div>
                
                <div className='unauth-sec unauth-sec2'>
                    <div className='unauth-card-container'>
                        <div className='unauth-card-icon unauth-bg-black'>
                                <i class="fas fa-calculator  unauth-white"></i>
                            </div>
                            <p className='unaut-card-title unauth-white'>Calculate</p>
                            <p className='unaut-card-description unauth-off-white'>Calculate your daily calories in and out and your steps.</p>
                            <Link to='/' className='unauth-button unauth-white unauth-bg-black'>Create Account</Link>
                    </div>
                </div>
                
                <div className='unauth-sec unauth-sec3'>
                    <div className='unauth-card-container'>
                        <div className='unauth-card-icon unauth-bg-green'>
                                <i class="fas fa-utensils unauth-white"></i>
                            </div>
                            <p className='unaut-card-title unauth-black '>Nutrtion</p>
                            <p className='unaut-card-description unauth-off-black'>Get deeper insights on your daily food macros and micros.</p>
                            <Link to='/' className='unauth-button unauth-white unauth-bg-black'>Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
