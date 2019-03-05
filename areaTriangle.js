//  Stephen Scruggs                 //  areaTriangle.js
// Jan. 31, 2019                    //  jsintern

//  This program creates a function to find area
//  of a triangle giving parameters.

function area_of_triangle(){
    var side1 = 5; 
    var side2 = 6; 
    var side3 = 7; 
    var s = (side1 + side2 + side3)/2;
    var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    console.log(area);
}
area_of_triangle(5,6,7);