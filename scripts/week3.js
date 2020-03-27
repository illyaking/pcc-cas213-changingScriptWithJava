/*jslint devel: true*/
/*global document, alert, console*/
/*eslint no-console: 0*/
/*eslint no-unused-vars: 0*/

/*
File Name: week3.js
Date: 10/13/18
Programmer: Illya King
*/

// The line below is to test your link to the .js file. Please comment it out (put // in front).
// alert("the link to the .js file is correct!");

// Set values

// 1 Set h1 to a different color

document.getElementById("myH1").style.color = "green";

// 2 Set font family of h1 to Verdana, sans-serif

document.getElementById("myH1").style.fontFamily = "Verdana, sans-serif";

// 3 Set Your Name to your actual name in the h2 tag

document.getElementById("myH2").innerHTML = "Illya King";

// 4 Set background color of page to a new color
// IMPORTANT: You MUST use a very light color so there is sufficient contrast for visually impaired users.
// It is a good idea to check your color contrast at http://webaim.org/resources/contrastchecker/ . I require
// that contrast be at the AAA level for 100% credit in my classes.
// You can use either a named color or a hex color.

document.getElementById("myBody").style.backgroundColor = "rgb(204, 204, 204)";

// 5 Set the text in h1 to something different

document.getElementById("myH1").innerHTML = "Changing the script with Java";

// 6 Set the href in the link to any website of your choice

document.getElementById("myLink").href = "https://illyaking.com";

// 7 Set the text in the link to describe the location above

document.getElementById("myLink").href = "https://illyaking.com";

// 8 Set the target of the link to "_blank", so it opens in a new tab

document.getElementById("myLink").target = "https://illyaking.com";

// 9 Set the image src to an image of your choice. Be sure it is a small image, approx 138 x 138 pixels
// You will need to save the image in your 'images' subfolder first.

document.getElementById("myImage").src = "images/demo01.jpg";

// 10 Set the caption of the image to something that makes sense for the image you displayed above.
//    Hint: This is done the same way as the way you set text in other HTML tags like h1 or p. All you need is the ID.

document.getElementById("caption").innerHTML = "Superheroes";

// Read values
// Be careful! The statements in this section are in a completely different format from those above. For credit,
// your code must *read* a value from the page, then assign it to the text box. That can be done in one statement or two.
// See Step 6: Combining reading and writing using a variable and the video I provided for examples of how to do this.

// 11 The color of the text in the h1 heading (display in box1)

var textInBox1 = document.getElementById("myH1").style.color;
document.getElementById("box1").value = textInBox1;

// 12 The background color of the page (display in box2)

var textInBox2 = document.getElementById("myBody").style.backgroundColor;
document.getElementById("box2").value = textInBox2; 

// 13 The text in the caption below the picture (display in box3)

var textInBox3 = document.getElementById("caption").innerHTML;
document.getElementById("box3").value = textInBox3; 

// 14 The text in the h1 heading (display in box4)

var textInBox4 = document.getElementById("myH1").innerHTML;
document.getElementById("box4").value = textInBox4; 

// 15 My image is at (display the src of the image in place of the text in span tags that says 'image url'
// Be careful! The format of this is similar to statements 11-14, but this time we are putting the text inside of HTML
// tags instead of in a text box. 

var textInItemA = document.getElementById("myImage").src;
document.getElementById("imageLocation").innerHTML = textInItemA;


// ======================================================================================================