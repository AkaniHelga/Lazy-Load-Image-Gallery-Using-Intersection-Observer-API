/*creating an intersection observer object
var observer = new IntersectionObserver(callback, options); THEREFORE

the CALLBACK function in the case is a set of entries that carries info about each intersection and 
the observer itself. the entries can be filtered or looped to work with intersection entries we want */


/*for the OPTIONS function, i use these parameters
1. root as their default values i.e viewport
2.threshold as its default: zero
3.rootmargin as its default: 0
these two parameters set to default will notify the observer the moment an image appears in the viewport

when the image intersects the viewport area, the placholder is replaced with the actual image
*/


// 1. IMAGE GALLERY WITH A SET VIEWPORT AREA
//create an observer object

let observer = new IntersectionObserver((entries, observer) =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      console.log(entry);
      entry.target.src = entry.target.dataset.src;  //entry.target is the element observed by the observer i.e images
      observer.unobserve(entry.target);             /*once the placeholder is replaced, we don't need to observe it anymore
                                                    so we use an unobserve method*/
    }
  });
}, {rootmargin: "0px 0px -300px 0px "});   //rootmargin that 

  //use the observer method to observe all images
  document.querySelectorAll('img').forEach(img => { observer.observe(img) });


// 2. IMAGE GALLERY WITHOUT A SET VIEWPORT AREA
// let observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//     //this code deals with each intersection by replacing the placeholder image with an actual img

//     if(entry.isIntersecting){
//       console.log(entry);
//       entry.target.src = entry.target.dataset.src; 
//       observer.unobserve(entry.target);   
//       }
//     });
//   },);  
//   //use the observer method to observe all images
//   document.querySelectorAll('img').forEach(img => { observer.observe(img) });

