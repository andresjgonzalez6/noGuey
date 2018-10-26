$("#tables-btn").on("click", function () {
    $.get("/api/tables", function (data) {
        console.log(data);
        console.log(data);
         if (data) {

          $("#stats").show();
          $("#name").text(data.name);
          $("#role").text(data.role);
          $("#age").text(data.age);
          $("#force-points").text(data.strengthPoints);
        }
    });
});


$("#submit-btn").on("click", function () {
    event.preventDefault();
        var newReservation = {
          name: $("#name").val().trim(),
          role: $("#phone_number").val().trim(),
          age: $("#email").val().trim(),
          strengthPoints: $("#unique_id").val().trim()
        };
  
        // Question: What does this code do??
        $.post("/api/reservation", newReservation)
          .then(function(data) {
              console.log(data);
            alert("reserved");
          });
});