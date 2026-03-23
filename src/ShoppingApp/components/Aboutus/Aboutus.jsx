import React from "react";
import "./Aboutus.css";
import ReviewSliders from '../Home/ReviewSliders/ReviewSliders'
function Aboutus() {
  return (
    <>
      <div>
        <div className="container">
          <div>
            <div className="mt-3 mb-3 container main-about">
              <div>
                <div>
                  <h3 className="text-center text-success">About Us</h3>
                </div>
                <hr />
                <div>
                  <div className="text-center mt-3 mb-3">
                    <div>
                      <h3 className="text-center mt-3 mb-3">
                        Voomka
                      </h3>
                    </div>
                  </div>

                  <div className="mt-3 mb-3 ">
                    <div>
                      <p>
                        <b>Voomka</b> is an online saree store based in <b>Aurangabad, Maharashtra,</b> created with a simple yet powerful vision — to bring timeless Indian elegance to every woman’s wardrobe. We believe that a saree is not just an outfit; it is a symbol of grace, culture, confidence, and tradition. At Voomka, we celebrate the beauty of Indian heritage by offering a carefully curated collection of sarees that blend tradition with modern style.
                      </p>
                    </div>
                    <div>
                      <p>
                        <b>Aurangabad</b> is known for its rich history, vibrant culture, and artistic legacy. Inspired by this heritage, Voomka brings you sarees that reflect the colors, craftsmanship, and elegance of India. From festive celebrations and weddings to casual gatherings and office wear, our collection is designed to suit every occasion and every personality.
                      </p>
                      <p>Thank you for choosing Voomka. We are proud to serve customers in Aurangabad and across Maharashtra and India. Explore our collection and experience the charm, tradition, and elegance that only a saree can offer — delivered with love from Voomka.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ReviewSliders />

          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
