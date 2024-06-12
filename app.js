// document.querySelector('#center').addEventListener("mousemove", function(dets){
//     //console.log(dets.clientX, dets.clientY);
// })

//throttling - kisi particular code ke no of executions ko kam kar dena
const btn = document.querySelector("#throttle");
 
        // Throttling Function
        const throttleFunction = (func, delay) => {
 
            // Previously called time of the function
            let prev = 0;
            return (...args) => {
                // Current called time of the function
                let now = new Date().getTime();
 
                // Logging the difference
                // between previously 
                // called and current called timings
                console.log(now - prev, delay);
 
                // If difference is greater
                // than delay call
                // the function again.
                if (now - prev > delay) {
                    prev = now;
 
                    // "..." is the spread
                    // operator here 
                    // returning the function with the 
                    // array of arguments
                    return func(...args);
                }
            }
        }
        document.querySelector("#center")
        .addEventListener("mousemove",
            throttleFunction((dets) => {
               // console.log("chala")
               var div = document.createElement("div")  //div banaya
               div.classList.add('imgdiv'); //add class to give height and width
               div.style.left = dets.clientX+'px';
               div.style.top = dets.clientY+'px';
               document.body.appendChild(div) //append div to the body

               var div = document.createElement("img");
               img.setAttribute("src", )
               //to remove that div
               setTimeout(function(){
                div.remove();
               },1000)
            }, 400));