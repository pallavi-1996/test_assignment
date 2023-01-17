import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Navbar() {

        const navigate = useNavigate();
     
        const createAds = () => {
            navigate('/cards');
        } 
     

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand">App Logo</a>
                <a class="navbar-brand" style={{marginLeft:"auto"}}>Dashboard</a>
                <button class="btn btn-danger" onClick={createAds}>Create Ads</button>
            </nav>
        </div>
    )
}