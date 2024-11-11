import Card from '../components/Card';
import React from 'react';


function Report({ }) {

    return (
        <div>
            <h2 className="text-center">
                Report
            </h2>
            <hr />
            <p>It was made for Report testing</p>
            <div className="row gap-3 p-4">
                <Card className="col-4"
                    key={10}
                    locationId={118}
                    suburbName={"Adelaide"}
                    roadName={"Grote Street/West Terrace"}
                    latitude={-34.929203}
                    longitude={138.587725}
                    totalFee={1}
                    totalDemerits={2}
                    avgDemeritsDaily={3}
                />
                <Card
                    key={20}
                    locationId={170}
                    suburbName={"Clovelly Park"}
                    roadName={"South Road"}
                    latitude={-34.993378}
                    longitude={138.574858}
                    totalFee={1}
                    totalDemerits={2}
                    avgDemeritsDaily={3}
                />
            </div>  
        </div>
    )
}

export default Report