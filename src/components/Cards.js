import React from 'react'
import img from "./mobile.png"
import { useNavigate } from 'react-router-dom';

export function Cards() {
    const navigate = useNavigate();
     
    const textAds = () => {
        navigate('/textads');
    } 

    const mediaAds = () => {
        navigate('/mediaAds');
    } 

    return (
        <div className='container mt-3'>
            <div className='card'>
                <div className='card-header'>
                    <h5>Create Ads</h5>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-3'>
                        </div>
                        <div className='col-md-3' style={{cursor:"pointer"}} onClick={textAds}>
                            <div className='card'>
                                <div className='card-header'>
                                    <input type="checkbox" style={{ marginRight: "100%" }} />
                                </div>
                                <div className='card-body'>
                                    <img src={img} height="150" width="150" />
                                </div>
                                <div className='card-footer'>
                                    <p>Create</p>
                                    <h5>Text Ad</h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'  style={{cursor:"pointer"}}  onClick={mediaAds}>
                            <div className='card'>
                                <div className='card-header'>
                                    <input type="checkbox" style={{ marginRight: "100%" }} />
                                </div>
                                <div className='card-body'>
                                    <img src={img} height="150" width="150" />
                                </div>
                                <div className='card-footer'>
                                    <p>Create</p>
                                    <h5>Media Ad</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>

                        </div>
                    </div>
                </div>
            </div>

            {/* <button className='btn btn-primary'>Next</button> */}

        </div>
    )
}
