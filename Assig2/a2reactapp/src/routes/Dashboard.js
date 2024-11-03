import React, { useState, useEffect } from 'react';
import SuburbList from '../components/SuburbList';

function Dashboard() {
    const [suburbs, setSuburbs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5147/api/Get_ListCameraSuburbs")
            .then(response => response.json())
            .then(data => setSuburbs(data))
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div>
            <h2>Dashboard</h2>
            <div className="filters row justify-content-end p-4">
                <div className="col-2">
                    <input type="text" placeholder="Search by Speeding" className="searchSpeeding form-control">
                    </input>
                </div>

                <div className="col-2">
                    {/* Display SuburbList in the dashboard */}
                    <SuburbList suburbs={suburbs} />
                </div>

                <div className="col-2">
                    <input type="date" className="dateFrom form-control" />
                </div>
                <div className="col-2">
                    <input type="date" className="dateTo form-control" />
                </div>
            </div>           
        </div>
    );
}

export default Dashboard;

