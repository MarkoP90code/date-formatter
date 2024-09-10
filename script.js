//embeded je valjda ${} u template leteral

//1.
const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");


//2.
const date = new Date();                    //In JavaScript, there are many built-in constructors that create objects. A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator. For example, you can use the Date() constructor with the new operator to create a new Date object that returns a string with the current date and time:
const day = date.getDate();                 //The Date object has a number of methods that allow you to get the date and time in different formats. One of those is the .getDate() method, which returns a number between 1 and 31 that represents the day of the month for that date. For example:
const month = date.getMonth() + 1;          //The .getMonth() method returns a number between 0 and 11. This represents the month for the date provided, where 0 is January and 11 is December. Because the number this method returns is zero-based, you need to add 1 to it to get the expected month number.
const year = date.getFullYear();            //The .getFullYear() method returns a number which represents the year for the provided date.
const hours = date.getHours();              //The .getHours() method returns a number between 0 and 23. This represents the hour for the provided date, where 0 is midnight and 23 is 11 p.m.
const minutes = date.getMinutes();          //The .getMinutes() method returns a number between 0 and 59 which represents the minutes for the provided date.


//3.
const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;                   //Ovde u currentDateParagraph ubacujem text.
dateOptionsSelectElement.addEventListener("change", () =>{          //In JavaScript, the change event is used to detect when the value of an HTML element has changed:
    
    switch (dateOptionsSelectElement.value) {               //Mogu da radim console.log da vidim sta radi. Ali u Html-u imam zadato sta je value.
        
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");    //Split, reverse, join mogu da googlam. Nije komplikovano.                                   
        break;

        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
        break;

        default:
            currentDateParagraph.textContent = formattedDate;               //ovde je default opcija ona prva opcija u html-u. Mozda sam mogao i da ubacim selected da zna da je ta opcija prva selektovana. To sam imao u vezbi 2.
    }

});       