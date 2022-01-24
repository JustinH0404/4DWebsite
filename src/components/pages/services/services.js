import "./services.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Services(){
    return(
        <div class = "services container-fluid pt-3" id="services">
            <p class = "servicesTitle pt-5"> What we offer </p>
            <div class="container">
                <div class ="cards mb-5">
                    <div class="col-lg-4 my-4">
                        <div class="card h-100 border border-white my-3 mx-4">
                            <img class="card-img-top" alt="pic"></img>
                            <div class="card-body">
                                <h5 class="card-title px-3 pt-3"> Education </h5>
                                <p class="card-text px-3 pb-0"> Lorem ipsum dolor sit amet, te ipsum everti vim, perpetua omittantur interpretaris pro et. Ea sit quando numquam accumsan, quidam aliquid fierent his ex. Sed aliquid definitionem eu, an mea odio percipit. Probatus hendrerit usu ut. Salutandi consequat cu eos. </p>
                            </div>
                            <div class="card-footer bg-white border border-white text-center pt-0">
                                <a href="/" class="card-button btn btn-white border border-black mb-3 ml-5 w-75">Future Education Page</a>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 my-4">
                        <div class="card h-100 border border-white my-3 mx-4">
                            <img class="card-img-top" alt="pic"></img>
                            <div class="card-body">
                                <h5 class="card-title px-3 pt-3"> Investment Services </h5>
                                <p class="card-text px-3 pb-0"> Lorem ipsum dolor sit amet, te ipsum everti vim, perpetua omittantur interpretaris pro et. Ea sit quando numquam accumsan, quidam aliquid fierent his ex. Sed aliquid definitionem eu, an mea odio percipit. Probatus hendrerit usu ut. Salutandi consequat cu eos. </p>
                            </div>
                            <div class="card-footer bg-white border border-white text-center pt-0">
                                <a href="/" class="card-button btn btn-white border border-black mb-3 ml-5 w-75">Future Projects Page</a>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 my-4">
                        <div class="card h-100 border border-white my-3 mx-4">
                            <img class="card-img-top" alt="pic"></img>
                            <div class="card-body">
                                <h5 class="card-title px-3 pt-3"> Lobbying Services</h5>
                                <p class="card-text px-3 pb-0"> Lorem ipsum dolor sit amet, te ipsum everti vim, perpetua omittantur interpretaris pro et. Ea sit quando numquam accumsan, quidam aliquid fierent his ex. Sed aliquid definitionem eu, an mea odio percipit. Probatus hendrerit usu ut. Salutandi consequat cu eos. </p>
                            </div>
                            <div class="card-footer bg-white border border-white text-center pt-0">
                                <a href="/" class="card-button btn btn-white border border-black mb-3 ml-5 w-75">Future Projects Page</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}