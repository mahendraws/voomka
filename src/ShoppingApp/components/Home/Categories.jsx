import React from 'react'
import cat1 from '../../assets/images/cat1.jpg';
import cat2 from '../../assets/images/cat2.jpg';
import cat3 from '../../assets/images/cat3.jpg';
function Categories() {
    return (
        <section className="category-area section-padding30">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center mb-85">
                            <h3>Shop by Category....</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6">
                        <div className="single-category mb-30">
                            <div className="category-img">
                                <img src={cat1} alt="cat1" loading="lazy" decoding="async" />
                                <div className="category-caption">
                                    <h2>Silk Saree's</h2>
                                    <span className="best"><a href="#">Best New Deals</a></span>
                                    <span className="collection">New Collection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="single-category mb-30">
                            <div className="category-img text-center">
                                <img src={cat2} alt="cat2" loading="lazy" decoding="async" />
                                <div className="category-caption">
                                    <span className="collection">Discount!</span>
                                    <h2>Cotton Saree's</h2>
                                    <p>New Collection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="single-category mb-30">
                            <div className="category-img">
                                <img src={cat3} alt="cat3" loading="lazy" decoding="async" />
                                <div className="category-caption">
                                    <h2>Chiffon Saree's</h2>
                                    <span className="best"><a href="#">Best New Deals</a></span>
                                    <span className="collection">New Collection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories