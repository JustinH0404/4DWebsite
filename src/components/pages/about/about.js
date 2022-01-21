import './about.css'
import AnimatedNumber from "animated-number-react";


export default function about(){
    const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
        const target = document.querySelector(qSelector);
        let startTimestamp = null;
        const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
        window.requestAnimationFrame(step);
        }
        };
        window.requestAnimationFrame(step);
    };
        //#endregion - end of - number counter animation
        
    document.addEventListener("DOMContentLoaded", () => {
        counterAnim("#count1", 10, 1, 1000);
        counterAnim("#count2", 5000, 5, 1500);
        counterAnim("#count3", -1000, -150, 2000);
        counterAnim("#count4", 500, -100, 2500);
    });

    return(
        <div class = "about container">
            <div class="row">
            <div class = "col-md-5 ">
                <p class = "aboutTitle"> Who we are</p>
                <p class = "aboutDescription">Founded in 2022, 4D Capital is an organization based in 
                UC Berkeley that focuses on cryptocurrency. Our expereinced members 
                focus on creating invaluable experiences for both our clients and
                our members etc etc etc </p>
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
                        <h1 id = "count2" class="stats3"> </h1>
                        <h5 class="statdesccription"> Projects</h5>
                    </div> 
                    <div class="col-sm-3 mb-5">
                        <h1 id = "count1" class="stats4">1</h1>
                        <h5 class="statdesccription"> Community </h5>
                    </div>                   
                </div>
            </div>
            </div>
        </div>
    )
}