# Lazy-Load-Image-Gallery-Using-Intersection-Observer-API
An Intersection Observer API is an object that spots elements in real time like birdwatchers waiting for birds to fly by.

The API is an inbuilt JS feature in most browsers except IE. It is used to lazy load images, to see how much of a page has been viewed
and to autopause videos when they are out of view. 

It observes: 

    1.Intersections: where an element passes across/ through an ancestor element. E.g a paragraph that crosses the top border of a box. 
    
    2. Viewport The browser shows a placeholder element, and once the observer detects an element in an intersection or viewport, 
    it replaces the placeholder with an actual image.



The API is better than onscroll lazy load because it is lighter on browsers particularly in sites that have hundreds of images 
like e-commerce sites. In the case of an image gallery, the observer display a placeholder image and replaces it with an actual image when it observes an image element intersecting with set intersections or a viewport.

