import React from "react";
import h2 from '../../assets/images/h2.jpg'

import { useEffect } from "react";
import BestSellerNew from "./BestSellerNew";
function Banner() {




    return (
        <>

            <div class="container-fluid mt-4" style={{ backgroundColor: "#ffefef" }}>

                <div class="row text-center">

                    <div class="col text-center">
                        <img className="img-fluid" src={h2} alt="delivered in 2 hours at ch sambhaji nagar, voomka" />


                    </div>


                </div>

            </div>


            <section id="billboard" className="bg-light py-5" style={{ position: "relative" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="section-title text-center mt-4" >New Collections</h1>
                        <div className="col-md-6 text-center" >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci
                                repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum,
                                quibusdam ex repellat eaque!</p>
                        </div>
                    </div>
                    <div className="row">

                        <BestSellerNew />
                    </div>
                </div>
            </section>


        </>
    );
}

export default Banner;