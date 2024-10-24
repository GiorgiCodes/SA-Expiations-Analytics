import React from 'react';
import SuburbList from '../components/SuburbList';

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <div className="col-3">
                {/* Display SuburbList in the dashboard */}
                <SuburbList />

            </div>
        </div>
    );
}

export default Dashboard;