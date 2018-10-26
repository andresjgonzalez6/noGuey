// dependencies 
var express = require("express");
var path = require("path");

// express app setup
let app = express();
let PORT = process.env.PORT || 3828;

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/reserve", function (req, res) {
    return res.json(reserveList);
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// creates a new table for waitlist
app.post("/tables", function (req, res) {
    let newReservation = req.body;

    console.log(newReservation);

    waitList.push(newReservation);

    return res.json(newReservation);
});
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
let reserveList = [
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

function displayRoot(url, req, res) {
    // code here
};

function displayReserve(url, req, res) {
    // code here
};

function displayTables(url, req, res) {
    // code here
};

function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            return displayRoot(path, req, res);

        case "/reserve":
            return displayReserve(path, req, res);

        case "/tables":
            return displayTables(path, req, res);

        default:
            return display404(path, req, res);
    }
};
