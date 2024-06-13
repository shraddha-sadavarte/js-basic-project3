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

               var img = document.createElement("img");
               img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31NXLW_Xi50Szm_k9_JAl9YVyOhNhGOxBsA&s" );
               div.appendChild(img);

               //to make img visible from bottom
               gsap.to(img, {
                y:"0",
                ease: Power1,
                duration:0.5,
               })

               //to remove that appeared img
               gsap.to(img, {
                y:"100%",
                ease: Power2,
                delay: .8,
               })

               //to remove that div
               setTimeout(function(){
                div.remove();
               },1000)
            }, 400));