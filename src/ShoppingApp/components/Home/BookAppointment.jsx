import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function BookAppointment() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });

        AOS.refresh();

    }, []);

    return (
        <section className="features py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-center" >
                        <div className="py-5">
                            <svg width="38" height="38" viewBox="0 0 24 24">
                                <use href="#calendar"></use>
                            </svg>
                            <h4 className="element-title text-capitalize my-3">Free Shipping Method</h4>
                            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="py-5">
                            <svg width="38" height="38" viewBox="0 0 24 24">
                                <use href="#shopping-bag"></use>
                            </svg>
                            <h4 className="element-title text-capitalize my-3">Pick up in store</h4>
                            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center" >
                        <div className="py-5">
                            <svg width="38" height="38" viewBox="0 0 24 24">
                                <use href="#gift"></use>
                            </svg>
                            <h4 className="element-title text-capitalize my-3">Special packaging</h4>
                            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center" >
                        <div className="py-5">
                            <svg width="38" height="38" viewBox="0 0 24 24">
                                <use href="#arrow-cycle"></use>
                            </svg>
                            <h4 className="element-title text-capitalize my-3">free global returns</h4>
                            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookAppointment