import './about.css'

export default function about(){
    return(
        <div class = "about container">
            <div class="row">
            <div class = "col-md-5 ">
                <div class = "aboutTitle">
                    <span> Who we are</span>
                </div>
                <div class = "aboutDescription">
                    <span>Founded in 2022, 4D Capital is an organization based in 
                    UC Berkeley that focuses on cryptocurrency. Our expereinced members 
                    focus on creating invaluable experiences for both our clients and
                     our members etc etc etc </span>
                </div>
            </div>
            <div class= "col-md-7 ml-5">
                <div class="row mt-5"> 
                    <div class="col-sm-3 mb-5">
                        <h1 class="stats1"> </h1>
                        <h5 class="statdesccription">Dollars Raised </h5>
                    </div>
                    <div class="col-sm-3 mb-5">
                        <h1 class="stats2"> </h1>
                        <h5 class="statdesccription"> Members </h5>
                    </div> 
                    <div class="col-sm-3 mb-5">
                        <h1 class="stats3"> </h1>
                        <h5 class="statdesccription"> Projects</h5>
                    </div> 
                    <div class="col-sm-3 mb-5">
                        <h1 class="stats4">1</h1>
                        <h5 class="statdesccription"> Community </h5>
                    </div>                   
                </div>
            </div>
            </div>
        </div>
    )
}