// script.js

/* Author(s): Kevin Davis
 * Creation Date: 11/5/2024
 * Last Revision Date: 11/5/2024
 * Purpose: To create a mountain background
 * Citation: [1]“add picture to a landing page using javascript - Bing,” Bing, 2019. https://www.bing.com/search?q=add+picture+to+a+landing+page+using+javascript&qs=n&form=QBRE&sp=-1&ghc=2&lq=0&pq=add+picture+to+a+landing+page+using+javascript&sc=10-46&sk=&cvid=C1340593FD8D477E815F672D86D2714D&ghsh=0&ghacc=0&ghpl= (accessed Nov. 05, 2024).
 */

function addBackground() {
    // Create a new image named mountain image
    var img = document.createElement('img');

    // Assign the new image its source
    img.src = "https://static.vecteezy.com/system/resources/previews/020/744/204/original/panoramic-mountain-cartoon-landscape-natural-landscape-in-the-flat-style-with-blue-sky-clouds-trees-hills-and-mountains-with-snow-on-the-peaks-vector.jpg";

    // More Alterations
    img.alt = "Flappy Buc Mountains Background!";
    img.width = 400; // pixel width
    img.height = 400; // pixel height 

    // Create a container for the Mountains
    var container = document.getElementById('image-container');

    // Attach the Mountains to the container 
    container.appendChild(img);
}
