<template>
<section id="projects" class="py-5">
    <div class="container my-5">
        <h3 class="text-center pt-5 pb-2"><strong>PROJECTS</strong></h3>
        <label class="line mx-auto mb-3"></label>
        <div class="row">
            <div class="col-12 mb-5">
            <ul class="nav nav-pills mb-3 nav-fill mx-5" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="all-tab" data-toggle="pill" href="#all" role="tab" aria-controls="all" aria-selected="true">UNDER DEVELOPMENT </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="freelance-tab" data-toggle="pill" href="#freelance" role="tab" aria-controls="freelance" aria-selected="false">COMPLETED</a>
                </li>
            </ul>
            </div>
        </div>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active " id="all" role="tabpanel" aria-labelledby="all-tab">
                <div class="d-flex flex-wrap flex-row">
                <div class="col-md-4 mb-4 mb-md-4">
                    <div class="card">
                        <img class="card-img-top" src="/img/companyLogos/sbj.png" alt="sbj properties">
                        <div class="card-body">
                            <h5 class="card-title">SBJ Properties</h5>
                            <p class="card-text">Status: Waiting for Client Feedback</p>
                            <a href="https://sbj.ek-brandconsult.com" target="_blank" class="btn btn-outline-primary py-1px-3">View</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4 mb-md-4">
                    <div class="card">
                        <img class="card-img-top" src="/img/companyLogos/akai.png" alt="akai house clinic">
                        <div class="card-body">
                            <h5 class="card-title">Akai House Clinic</h5>
                            <p class="card-text">Status: Waiting for Client Feedback</p>
                            <a href="https://akaiclinic.ek-brandconsult.com" target="_blank" class="btn btn-outline-primary py-1px-3">View</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4 mb-md-4">
                    <div class="card">
                        <img class="card-img-top" src="/img/companyLogos/arcadian.png" alt="arcadian investment">
                        <div class="card-body">
                            <h5 class="card-title">Arcadian Investment Partners</h5>
                            <p class="card-text">Status: Updated with Client Feedback. Yet to be transferred to their Domain</p>
                            <a href="https://arcadian.ek-brandconsult.com" target="_blank" class="btn btn-outline-primary py-1px-3">View</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4 mb-md-4">
                    <div class="card">
                        <img class="card-img-top" src="/img/companyLogos/haircouture.png" alt="haircouture">
                        <div class="card-body">
                            <h5 class="card-title">Hair Couture</h5>
                            <p class="card-text">Status: Waiting for Client Feedback</p>
                            <a href="https://haircouture.ek-brandconsult.com" target="_blank" class="btn btn-outline-primary py-1px-3">View</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4 mb-md-4">
                    <div class="card">
                        <img class="card-img-top" src="/img/3.png" alt="ghanawillproser">
                        <div class="card-body">
                            <h5 class="card-title">Ghana Will Prosper</h5>
                            <p class="card-text">Status: Campaign website to get customers. Not hosted</p>
                            <a href="https://ek-brandconsult.com" target="_blank" class="btn btn-outline-primary py-1px-3">View</a>
                        </div>
                    </div>
                </div>
               <!-- <div class="col-md-4 mb-4 mb-md-4">
                    <div class="card">
                        <img class="card-img-top" src="/img/2.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Wesley Church</h5>
                            <p class="card-text"> Bootstrap3, JQuery, PHP (Laravel), Heroku</p>
                            <a href="https://wesleychurh.herokuapp.com" target="_blank" class="btn btn-outline-primary py-1px-3">View</a>
                        </div>
                    </div>
                </div> -->
            </div>
            </div>
            <div class="clearfix"></div>
            <div class="tab-pane fade " id="freelance" role="tabpanel" aria-labelledby="freelance-tab">
                <div class="d-flex flex-wrap flex-row">
                    <div class="col-md-4 mb-4 mb-md-4">
                        <div class="card">
                            <img class="card-img-top" src="/img/companyLogos/brainhill.jpg" alt="brainhill">
                            <div class="card-body">
                                <h5 class="card-title">Brainhill International School</h5>
                                <p class="card-text">Status: Was rebuilt with VueJs as PWA</p>
                                <a href="https://brainhill.edu.gh" target="_blank" class="btn btn-outline-primary py-1px-3">View</a>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-md-4 mb-4 mb-md-4">
                        <div class="card">
                            <img class="card-img-top" src="/img/4.png" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Kingdom Harvesters Ministries</h5>
                                <p class="card-text"> Bootstrap4,  JQuery, Devless.</p>
                                <a href="https://khm.netlify.com" target="_blank" class="btn btn-outline-primary py-1px-3">View</a>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        </div>
</section>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
#projects {
  background-color: #f5f5f5;
}
.card img{
  height: 10em;
}
#pills-tab .nav-item{
  margin: 0 5em;
}
</style>
