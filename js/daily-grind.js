// alert("Its working!");

/*
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
here are the items we need to change for each coffee: 
image - src of pic
alt- alt tag of pic
description - a paragraph of content about the coffee
name - name of todays coffee
color - color representing the coffee

We may also use the following, but not part of the coffee itself. 

today - current day of the week
*/

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += 
    `<p> 
        <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>,${coffee.desc}
        </p>`;

    return myReturn;
}



let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";


//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){ //data available? show data from url
myDay = urlParams.get("day");
}



// forced to be a integer
myDay = parseInt(myDay);

switch(myDay){

case 0:
    today = "Sunday";
    coffee = {
        color: "brown",
        name: "Cold-brew",
        pic: "images/cold-brew.jpg",
        alt: "A picture of a Cold Brew",
        day: "Sunday",
        desc: `I like me some Cold Brew!`

    };
break;

case 1:
    today = "Monday";
    coffee = {
        color: "teal",
        name: "Drip",
        pic: "images/drip.jpg",
        alt: "A picture of a Drip",
        day: "Monday",
        desc: `I like me some Drip!`
    };
break;

case 2:
    today = "Tuesday";
    coffee = {
        color: "cadetBlue",
        name: "Frappaccino",
        pic: "images/frappaccino.jpg",
        alt: "A picture of a Frappaccino",
        day: "Tuesday",
        desc: `I like me some Frapp!`
    };
break;

case 3:
    today = "Wednesday";
    coffee = {
        color: "pink",
        name: "Bubble Tea",
        pic: "images/bubble-tea.jpg",
        alt: "A picture of a Bubble Tea",
        day: "Wednesday",
        desc: `I like me some Bubble Tea!`

    };
break;

case 4:
    today = "Thursday";
    coffee = {
        color: "skyBlue",
        name: "Mocha",
        pic: "images/mocha.jpg",
        alt: "A picture of a Mocha",
        day: "Thursday",
        desc: `I like me some Mocha!`

    };
break;

case 5:
    today = "Friday";
    coffee = {
        color: "sienna",
        name: "Caramel-latte",
        pic: "images/caramel-latte.jpg",
        alt: "A picture of a Caramel latte",
        day: "Friday",
        desc: `I like me some Caramel!`

    };
break;

case 6:
    today = "Saturday";
    coffee = {
        color: "bisque",
        name: "Pumpkin-spice-latte",
        pic: "images/pumpkin-spice-latte.jpg",
        alt: "A picture of a Pumpkin Spice Latte",
        day: "Saturday",
        desc: `I like me some Pumpkin Spice!`

    };
break;
   
default:
    today = "Something went wrong!";
}

// alert(today);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
console.log(coffee);