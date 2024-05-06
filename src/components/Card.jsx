import React from "react";
// import pic1 from "../assets/images/pic1.jpg";
// import pic2 from "../assets/images/pic2.jpg";
import { green, orange, yellow } from '@mui/material/colors';
import { capitalizeFirstLetter } from "../utils/utilCommonFunc";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ElectricBoltSharpIcon from '@mui/icons-material/ElectricBoltSharp';

const Card = (Props) => {
    const { jobData } = Props;

    return (
        <div className="card">
            <div className="titles">
                <div>
                    <img className="company-logo" src={jobData?.logoUrl} alt="logo" />
                </div>
                <div className="job-info">
                    {jobData?.companyName && <h3>{jobData?.companyName}</h3>}
                    {jobData?.jobRole && <h2>{capitalizeFirstLetter(jobData?.jobRole)}</h2>}

                    {jobData?.location && <p className="location-info">{capitalizeFirstLetter(jobData?.location)}</p>}
                </div>
            </div>
            {jobData && jobData?.minJdSalary && jobData?.maxJdSalary && (
                <p className="salary">Estimated salary: ₹ {jobData.minJdSalary} - {jobData.maxJdSalary} LPA {<CheckBoxIcon fontSize="small" sx={{ color: green[500] }} />}</p>
            )}
            <div>
                <h3>About company: </h3>
                <h3>About us</h3>
                {jobData?.jobDetailsFromCompany && <p className="Jd-blur-text">
                    {jobData?.jobDetailsFromCompany}
                </p>}
            </div>
            <div className="btn-wrapper">
                <button className="more-btn">View job</button>
            </div>
            <div className="exp">
                {jobData?.minExp &&
                    <><h3>Minimum experience</h3><h2>{jobData?.minExp} Years</h2></>}
            </div>
            <div className="btn-wrapper">
                <button className="easyapply-btn"><span>{<ElectricBoltSharpIcon fontSize="small" sx={{ color: yellow[500], border: orange[700] }} />}</span>Easy Apply</button>
                <button className="referral-btn"><span>{<img src="" />}</span><span>{<img src="" />}</span>Unlock referral asks</button>
            </div>
        </div>


    )
}

export default Card;