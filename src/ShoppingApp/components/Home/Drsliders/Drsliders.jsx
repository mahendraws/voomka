import React from "react";
import doc1 from "../../../assets/images/team-img-2.jpg"
import doc2 from "../../../assets/images/team-img-5.jpg"
function Drsliders()
{

  return (
    <>
<section class="bg-light py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="mb-4 display-5 text-center" style={{color: "rgb(5, 95, 5)"}}>Our Team of Expert Doctor</h2>
        <p class="text-secondary mb-5 text-center lead fs-4">We are a group of innovative, experienced, and proficient teams.</p>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-4 gy-lg-0 gx-xxl-5">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src={doc1} alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Dr Seema sarode</h4>
                <p class="text-secondary mb-0">Avurveda</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src={doc2} alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Dr. Abhishek Rathod</h4>
                <p class="text-secondary mb-0">Vaidya</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src={doc1} alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Dr. Seema More</h4>
                <p class="text-secondary mb-0">General Doctor</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src={doc2} alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Dr. Mohan Joshi</h4>
                <p class="text-secondary mb-0">Skin</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Drsliders;
