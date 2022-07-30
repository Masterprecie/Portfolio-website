AOS.init();
         
//Swipper


   function animate(obj, initVal, lastVal, duration) {
      let startTime = null;

   //get the current timestamp and assign it to the currentTime variable
   let currentTime = Date.now();

   //pass the current timestamp to the step function
   const step = (currentTime ) => {

   //if the start time is null, assign the current time to startTime
   if (!startTime) {
      startTime = currentTime ;
   }

   //calculate the value to be used in calculating the number to be displayed
   const progress = Math.min((currentTime - startTime)/ duration, 1);

   //calculate what to be displayed using the value gotten above
   obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

   //checking to make sure the counter does not exceed the last value (lastVal)
   if (progress < 1) {
      window.requestAnimationFrame(step);
   } else {
         window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
   };
   //start animating
      window.requestAnimationFrame(step);
   }
   let text1 = document.getElementById('purecounter1');
   let text2 = document.getElementById('purecounter2');
   let text3 = document.getElementById('purecounter3');
   let text4 = document.getElementById('purecounter4');
   const load = () => {
      animate(text1, 0, 2, 7000);
      animate(text2, 0, 27, 7000);
      animate(text3, 100, 1463, 7000);
      animate(text4, 0, 2, 7000);
   }

