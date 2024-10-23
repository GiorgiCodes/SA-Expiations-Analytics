import React, { useState, useEffect } from 'react';

function SuburbList() {
    const [suburbs, setSuburbs] = useState([]);
    const [selectedSuburb, setSelectedSuburb] = useState("Select Suburb")

    const selectSuburb = (suburb) => {
        setSelectedSuburb(suburb);
    }

    useEffect(() => {
        fetch("http://localhost:5147/api/Get_ListCameraSuburbs")
            .then(response => response.json())
            .then(data => setSuburbs(data))
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle col-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedSuburb}
            </button>
            <ul className="dropdown-menu p-2 overflow-auto" aria-labelledby="dropdownMenuButton" style={{ maxHeight: '400px' }}>
                {suburbs.map((suburb, index) => (

                    <li key={index}><a className="dropdown-item" href="#" onClick={() => selectSuburb(suburb)}>{suburb}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default SuburbList;