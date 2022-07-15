import React from 'react'
import './flag.css'
// import Img from '../../src/pic.png';
// import {US} from 'country-flag-icons/react/3x2/US';
import ReactCountryFlag from 'react-country-flag';

function Flag() {
    return (
        <div className='flag_container'>

            {/* inactive form  */}
            <h6 className='heading'>Inactive</h6>
            <div className='flag'>
                <h6 className='phone'>Phone Number</h6>
                <div className='box'>
                    <select className='border1'>
                        <option><ReactCountryFlag  countryCode='US'  style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}/> +91 </option>
                        <option>+91 </option>
                        <option>+91 </option>
                        <option>+91 </option>
                    </select>
                    <input type="text" className='input' />
                </div>
            </div>


            {/* active form */}
            <h6 className='heading'>Active</h6>
            <div className='flag1'>
                <h6>Phone Number</h6>
                <div className='box'>
                    <select className='border2'>
                        <option>+91</option>
                        <option>+91</option>
                        <option>+91</option>
                        <option>+91</option>
                    </select>
                    <input type="text" className='input' />

                </div>
            </div>

            {/* Active and dropdown */}
            <h6 className='heading'>Active and dropdown</h6>
            <div className='flag2'>
                <h6>Phone number</h6>
                <div className='box'>
                    <select className='border3'>
                        <option>+91</option>
                        <option>+91</option>
                        <option>+91</option>
                        <option>+91</option>
                    </select>
                    <input type="text"></input>
                </div>
            </div>


        </div>
    )
}

export default Flag