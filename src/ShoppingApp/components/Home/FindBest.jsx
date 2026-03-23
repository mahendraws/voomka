import React from 'react'
import cardwomen from '../../assets/images/card-women.png';
import card from '../../assets/images/card.png';

function FindBest() {
    return (
        <div className="best-product-area lf-padding">
            <div className="product-wrapper bg-height" style={{ backgroundImage: "url('{card}')" }}>
                <div className="container position-relative">
                    <div className="row justify-content-between align-items-end">
                        <div className="product-man position-absolute  d-none d-lg-block">
                            <img src={cardwomen} alt="" loading="lazy" decoding="async" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 d-none d-lg-block">
                            <div className="vertical-text">
                                <span>Voomka</span>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="best-product-caption">
                                <h2>Find The Best Product<br /> from Our Shop</h2>
                                <p>Designers who are interesten creating state ofthe.</p>
                                <a href="#" className="black-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape bounce-animate d-none d-md-block">
                <img src="assets/img/categori/card-shape.png" alt="" loading="lazy" decoding="async" />
            </div>
        </div>
    )
}

export default FindBest