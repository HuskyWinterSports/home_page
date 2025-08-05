import '../../assets/Global.css'

import { Link, Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section className='home-banner'>
                <h1 className='home-title'>HUSKY WINTER SPORTS</h1>
                <h2 className='home-subtitle'>SKI AND SNOWBOARD SCHOOL</h2>

                {/* buttons to become an instructor and lesson info */}

            </section>
            <section className='text-on-picture'>
                <div className='text'>
                    <h3>ABOUT</h3>
                    <p>Husky Winter Sports is a non-profit ski and snowboard school operating under Ullr Snow Sports at the Summit at Snoqualmie. HWS is run by the University of Washington’s Husky Winter Sports Club, a registered student organization since 1937. All instructors are student volunteers trained as snowsports instructors following national professional guidelines set by Professional Ski Instructors of America and the American Association of Snowboard Instructors.</p>
                </div>
            </section>
            <section className='news'>
                <h3>NEWS</h3>
                <h4 className='excite'>Registration begins October 1st!</h4>
                <p>Joining our email list is the best way to stay up to date with information as lessons approach by signing up for our <Link to="/lessons/join-our-mailing-list">mailing list</Link>.</p>
            </section>
            <section className='why-us'>
                <h3>WHY US?</h3>
                <section className='cards'>
                    <div className='card'>
                        <h4>UW Students</h4>
                        <p>Unpaid, we're here because we want to spread the love of our favorite sport! This also means money saved on your end!</p>
                    </div>
                    <div className='card'>
                        <h4>Our Members are the Best!</h4>
                        <p>We do have a hiring process to make sure we only provide the best instruction.</p>
                    </div>
                    <div className='card'>
                        <h4>Enthusiastic and Safe</h4>
                        <p>We all love to have fun on the mountain but we know safety comes first.</p>
                    </div>
                    <div className='card'>
                        <h4>PSIA/AASI Certified</h4>
                        <p>All our members are PSIA certified or in training for it.</p>
                    </div>
                </section>
            </section>
        </>
    )
}