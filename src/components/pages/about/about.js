import './about.css'
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export default function About(){
    //counter function
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
        
    // document.addEventListener("DOMContentLoaded", () => {
    //     counterAnim("#count1", 0, 1, 2000);
    //     counterAnim("#count2", 0, 5, 1500);
    //     counterAnim("#count3", 0, 15, 2000);
    //     counterAnim("#count4", 0, 10000, 3000);
    // });
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    var count = 0;
    function myFunction(){
        if(document.documentElement.scrollTop>0.1*vh && count === 0){
            counterAnim("#count1", 0, 1, 1000);
            counterAnim("#count2", 0, 5, 1500);
            counterAnim("#count3", 0, 15, 2000);
            counterAnim("#count4", 0, 10000, 2500);
            count = count+1;
        }
        console.log(document.documentElement.scrollTop, vh)
    }
    window.onscroll = function() {myFunction()};

    useEffect(() => {
        Aos.init({duration:1500});
    }, []);

    return(
        <div class = "about container py-4" id="about">
            <div class="row py-5">
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
                        <h1 id ="count4" class="stats1">10,000 </h1>
                        <h5 class="statdesccription">Dollars Raised </h5>
                    </div>
                    <div class="col-sm-3 mb-5">
                        <h1 id = "count3" class="stats2"> 15</h1>
                        <h5 class="statdesccription"> Members </h5>
                    </div> 
                    <div class="col-sm-3 mb-5">
                        <h1 id = "count2" class="stats3"> 5</h1>
                        <h5 class="statdesccription"> Projects</h5>
                    </div> 
                    <div class="col-sm-3 mb-5">
                        <h1 id = "count1" class="stats4"> 1</h1>
                        <h5 class="statdesccription"> Community </h5>
                    </div>                   
                </div>
            </div>
            </div>
        </div>
    )
}