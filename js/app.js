// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
var detailsElem = document.getElementById("details");
detailsElem.addEventListener('click', alertBox);

function alertBox(){
    alert("Not Available in Hawaii");
}

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

var name1Elem = document.getElementById("name1");
name1Elem.addEventListener('mouseover', showHide);

function showHide(){
    var descrip1Elem = document.getElementById("descrip1");

    if(descrip1Elem.style.display === "none"){
        descrip1Elem.style.display = "block";
    }
    else{
        descrip1Elem.style.display = "none";
    }
}


//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

var name2Elem = document.getElementById("name2");
name2Elem.addEventListener("click", showDescrip);

var descrip2Elem = document.createElement("div");
descrip2Elem.id = "descrip2";
descrip2Elem.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";
name2Elem.appendChild(descrip2Elem);

function showDescrip(){
    if(descrip2Elem.style.display === "block"){
        descrip2Elem.style.display = "none";
    }
    else{
        descrip2Elem.style.display = "block";
    }
}

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
var thumbsElem = document.getElementsByClassName("far fa-thumbs-up");

for(var i=0; i<thumbsElem.length; i++){
    thumbsElem[i].addEventListener("click", thumbsUp);

    var countElem = document.createElement("div");
    countElem.className = "count";
    thumbsElem[i].appendChild(countElem);
}

function thumbsUp(){
    var counterElem = this.querySelectorAll('.count')[0];
    counterElem.innerHTML++;
}

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.
    //getElem(price4
//get("increase"))
//click on increase

var increaseElem = document.getElementById("increase");
increaseElem.addEventListener("click", increment);

//Extract just the price from the string and convert it to a number.
var price4Elem = document.getElementById("price4");
console.log(price4Elem.innerHTML.length);

var priceStr = price4Elem.innerHTML.slice(0,5);
console.log(priceStr);

var priceNum = Number(priceStr);
console.log(priceNum);

function increment(){

    priceNum = priceNum + 1000;
    console.log(priceNum);
    price4Elem.innerHTML = priceNum;
    price4Elem.appendChild(increaseElem);
}


//6. Add an event to the minus icon that will decrement the price of the Air Jordan V shoe each time the icon is clicked on.


//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 


//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.