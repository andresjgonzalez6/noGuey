$("#tables-btn").on("click", function () {
    //var searchedCharacter = $("#character-search").val().trim();

    // Using a RegEx Pattern to remove spaces from searchedCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

    // QUESTION: What does $.get do? What are the parameters it is expecting?
    $.get("/tables", function (data) {
        console.log(data);
        console.log(data);
        /* if (data) {
          $("#stats").show();
          $("#name").text(data.name);
          $("#role").text(data.role);
          $("#age").text(data.age);
          $("#force-points").text(data.strengthPoints);
        }
        else {
          $("#name").text("They are not an avenger, Check the Revengers. Your character was not found.");
          $("#stats").hide();
        } */
    });
});