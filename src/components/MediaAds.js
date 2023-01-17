import React from 'react';
import { useNavigate } from 'react-router-dom';

export function MediaAds() {
    const navigate = useNavigate();
     
    const backTo = () => {
        navigate('/cards');
    } 
    return (
        <div className='mt-3'>
            <div className='row'>
                <div className='col-md-1'>

                </div>
                <div className='col-md-10'>
                    <div className='card'>
                        <div className='card-header'>
                            <h5>Create Text and Media</h5>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='col-md-6' style={{ width: "auto" }}>
                                        <div class="form-group">
                                            <label style={{ float: "left" }}>Heading 01</label>
                                            <input type="text" id="inputID" class="form-control" placeholder='Add aheading that would make users intrested' />
                                        </div>
                                    </div>
                                    <div className='col-md-6' style={{ width: "auto", marginTop:"8px" }}>
                                        <div class="form-group p-1">
                                            <label style={{ float: "left" }}>Heading 02</label>
                                            <input type="text" class="form-control" placeholder='Add aheading that would make users intrested' />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="form-group">
                                        <label style={{ float: "left" }}>Description 01</label>
                                        <textarea className='form-control' rows="4" placeholder='Add Primary text to help users understand more about your products, services or offers'></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className='row' style={{marginTop:"8px"}}>
                                <div className='col-md-4'>
                                    <div class="form-group p-1">
                                        <label style={{ float: "left" }}>Landscape Marketing Image (1:9:1)</label>
                                        <input type="text" class="form-control" placeholder='Add the URL of the image you want to use for the ad' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div class="form-group p-1">
                                        <label style={{ float: "left" }}>Portrait Marketing Image (4:5)</label>
                                        <input type="text" class="form-control" placeholder='Add the URL of the image you want to use for the ad' />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div class="form-group p-1">
                                        <label style={{ float: "left" }}>Square Marketing Image (1:1)</label>
                                        <input type="text" class="form-control" placeholder='Add the URL of the image you want to use for the ad' />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-12'>
                                    <div class="form-group p-1">
                                        <label style={{ float: "left" }}>Video URL</label>
                                        <input type="text" class="form-control" placeholder='Add the URL of the image you want to use for the ad' />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div class="form-group p-1">
                                        <label style={{ float: "left" }}>Bussiness Name</label>
                                        <input type="text" class="form-control" placeholder='Bussiness Name' />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div class="form-group p-1">
                                        <label style={{ float: "left" }}>Button Label</label>
                                        <select className='form-control'>
                                            <option>Select a label that best suits your ad</option>
                                            <option>abc</option>
                                            <option>xyz</option>
                                            <option>lmn</option>
                                            <option>pqr</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-12'>
                                    <div class="form-group p-1">
                                        <label style={{ float: "left" }}>Website URL</label>
                                        <input type="text" class="form-control" placeholder='Add the URL of the image you want to use for the ad' />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div style={{float:"right"}}>
                                <button type="button" class="btn btn-outline-secondary" onClick={backTo}>Back</button>&nbsp;
                                <button className='btn btn-primary'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'>

                </div>

            </div>
        </div>
    )
}
