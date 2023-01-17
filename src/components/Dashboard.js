import React from 'react'
import { Donutchart } from "./Donutchart";
import { Navbar } from './Navbar';

export function Dashboard() {
    return (
        <>
            <Navbar></Navbar>
            <div style={{ marginTop: "10px", marginLeft: "10px", marginRight: "10px" }}>
                <br></br>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5>Ad Insights</h5>
                            </div>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table class="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr.No</th>
                                                <th>Campaigns</th>
                                                <th>Clicks</th>
                                                <th>Cost</th>
                                                <th>Conversions</th>
                                                <th>Revenue</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>1</th>
                                                <th >Cosmetics</th>
                                                <td>724</td>
                                                <td>USD 4253</td>
                                                <td>1</td>
                                                <td>USD, 13,947</td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <th>Cosmetics</th>
                                                <td>724</td>
                                                <td>USD 4253</td>
                                                <td>1</td>
                                                <td>USD, 13,947</td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <th>Cosmetics</th>
                                                <td>724</td>
                                                <td>USD 4253</td>
                                                <td>1</td>
                                                <td>USD, 13,947</td>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <th>Cosmetics</th>
                                                <td>724</td>
                                                <td>USD 4253</td>
                                                <td>1</td>
                                                <td>USD, 13,947</td>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <th>Cosmetics</th>
                                                <td>724</td>
                                                <td>USD 4253</td>
                                                <td>1</td>
                                                <td>USD, 13,947</td>
                                            </tr>
                                            <tr>
                                                <th>6</th>
                                                <th>Cosmetics</th>
                                                <td>724</td>
                                                <td>USD 4253</td>
                                                <td>1</td>
                                                <td>USD, 13,947</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='d-flex'>
                                    <h5>Ad Insights</h5>
                                    <select style={{ marginLeft: "auto" }}>
                                        <option>Clicks</option>
                                        <option>Costs</option>
                                        <option>Conversation</option>
                                        <option>Revenue</option>
                                    </select>
                                </div>
                            </div>
                            <div className='card-body' style={{ height: "350px" }}>
                                <Donutchart />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
