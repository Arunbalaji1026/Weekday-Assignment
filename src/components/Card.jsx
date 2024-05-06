import React, { useEffect } from "react";
import { getApiData } from "../utils/api";

const Card = () => {

    useEffect(() => {
        getApiData()
    }, []);


    return (
        <div className="card">
            <div className="titles">
                <div>
                    <img src="" alt="logo" />
                </div>
                <div>
                    <h3>zomato</h3>
                    <h2>ForntEnd Developer</h2>

                    <h6>
                        <span>chennai</span>
                    </h6>
                </div>
            </div>
            <h5>Estimated salaray: RS 14 - 18 LPA</h5>
            <div>
                <h3>About company: </h3>
                <p className="blur-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis architecto hic labore quia quo quod cumque molestiae adipisci dolores. Saepe, natus. Veritatis illum veniam optio adipisci quisquam voluptatibus consectetur cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque accusantium animi quam quasi maiores exercitationem et praesentium dicta, vero unde? Ipsam voluptatem eveniet suscipit eos eligendi quam culpa dolores maxime!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, saepe amet! Expedita, voluptatibus explicabo. Libero facilis sequi voluptatibus fugit distinctio voluptatum, sit quo nisi quas cumque harum sapiente, architecto aut!
                </p>
            </div>
            <div className="btn-wrapper">
                <button className="more-btn">Show more</button>
            </div>
            <div className="exp">
                <span>Minimum experience</span>
                <span>3 Years</span>
            </div>
            <div className="btn-wrapper">
                <button className="easyapply-btn">Easy Apply</button>
                <button className="referral-btn">Unlock referral asks</button>
            </div>
        </div>


    )
}

export default Card;