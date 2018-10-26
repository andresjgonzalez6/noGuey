// dependencies 
var express = require("express");
var path = require("path");

// express app setup
let app = express();
let PORT = process.env.PORT || 3828;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});

// information to send html request
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/pages/home.html"));
    console.log("home");
});

app.get("/api/reserve", function (req, res) {
    return res.json(reserveList);
   
});

app.get("/tables", function (req, res) {
    
    res.sendFile(path.join(__dirname, "public/pages/tables.html"));
    console.log("tables");
});

app.get("/api/tables", function (req, res) {
    
    let masterList = [
        reserveList,
        waitList
    ];
    return res.json(masterList);
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "public/pages/reservation.html"));
    console.log("reserve");
});

function toWaitOrReserve(reservation){
    if (reserveList.length < 5){
        reserveList.push(reservation);
        return "Reserved";
    }
    else{
        waitList.push(newWait);
        return "Added to waitlist"
    }
}
// creates a new table for waitlist
/* app.post("/api/tables", function (req, res) {
    let newWait = req.body;

    console.log(newWait);

    waitList.push(newWait);

    return res.json(newWait);
}); */

app.post("/api/reserve", function (req, res) {
    let newReserve = req.body;

    console.log(newReserve);

    return res.json(toWaitOrReserve(newReserve));

    
});


let reserveList = [
    {
        "customerName": "allison",
        "phoneNumber": "xxx-xxx-xxxx",
        "customerEmail": "xxxxx@gmail.com",
        "customerID": "0"
    },
    {

        "customerName": "ben",
        "phoneNumber": "xxx-xxx-xxxx",
        "customerEmail": "xxxx@gmail.com",
        "customerID": "1"
    },
    {

        "customerName": "carla",
        "phoneNumber": "xxx-xxx-xxxx",
        "customerEmail": "xxx@gmail.com",
        "customerID": "2"
    },
    {

        "customerName": "danielle",
        "phoneNumber": "xxx-xxx-xxxx",
        "customerEmail": "xxxxxx@gmail.com",
        "customerID": "3"
    },
    {

        "customerName": "emma",
        "phoneNumber": "xxx-xxx-xxxx",
        "customerEmail": "xx@gmail.com",
        "customerID": "4"
    }
];

let waitList = [
    {
        "customerName": "abby",
        "phoneNumber": "xxx-xxx-xxxx",
        "customerEmail": "xxxxx@gmail.com",
        "customerID": "0"
    },
    {

        "customerName": "ben",
        "phoneNumber": "xxx-xxx-xxxx",
        "customerEmail": "xxxx@gmail.com",
        "customerID": "1"
    },
    {

        "customerName": "carla",
        "phoneNumber": "xxx-xxx-xxxx",
        "customerEmail": "xxx@gmail.com",
        "customerID": "2"
    },
    {

        "customerName": "danielle",
        "phoneNumber": "xxx-xxx-xxxx",
        "customerEmail": "xxxxxx@gmail.com",
        "customerID": "3"
    },
    {

        "customerName": "emma",
        "phoneNumber": "xxx-xxx-xxxx",
        "customerEmail": "xx@gmail.com",
        "customerID": "4"
    }
];




