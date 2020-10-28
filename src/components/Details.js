import React from 'react';
import "./css/Details.css";

const Details = ({details, loading}) => {
        const mainInfo = () => {
            return (
                <div>
                    <div className="detailContainer">
                        <label className="detailLabel">Country Code:</label>
                        <p className="detailInfo">{details.CountryCode}</p>
                    </div>
                    <div className="detailContainer">
                        <label className="detailLabel">VAT Number:</label>
                        <p className="detailInfo">{details.VATNumber}</p>
                    </div>
                    <div className="detailContainer">
                        <label className="detailLabel">Request Date:</label>
                        <p className="detailInfo">{details.RequestDate}</p>
                    </div>
                </div>
            );
        }

        if(details.Valid) {
            return(
                <div className="detailsContainer">
                    {mainInfo()}
                    <div>
                        <div className="detailContainer">
                            <label className="detailLabel">Company Name:</label>
                            <p className="detailInfo">{details.Name}</p>
                        </div>
                        <div className="detailContainer">
                            <label className="detailLabel">Address:</label>
                            <p className="detailInfo">{details.Address}</p>
                        </div>
                    </div>
                </div>
            );
        } else if (details.Valid === false) {
            return(
                <div className="detailsContainer detailsContainer--false">
                    <p className="details-errorMessage">Country code is right, but VAT number is invalid. Please check Your VAT number</p>
                    {mainInfo()}
                </div>
            );
        } else if (loading) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }
    }   

export default Details;