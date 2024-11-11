

const Card = ({ locationId, totalFee, totalDemerits, avgFeeDaily, avgDemeritsDaily }) => {   

    return (
        <div className="card mb-3" style={{ width: '500px', height: '600px' }}>
            <div className="row">
                <div>
                    <div className="card-body">
                        <h5 className="card-title">LocationID: {locationId}</h5>
                        <p className="card-text">Total Fee: {totalFee}</p>
                        <p className="card-text">Total Demerits: {totalDemerits}</p>
                        <p className="card-text">Avg. Daily Fee: {avgFeeDaily}</p>
                        <p className="card-text">Avg. Daily Demerits: {avgDemeritsDaily}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
