import React from 'react';
import SuburbList from '../components/SuburbList'; // Import the SuburbList component

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="col-3">
             <SuburbList /> {/* Display SuburbList in the dashboard */}

            </div>
        </div>
    );
}

export default Dashboard;