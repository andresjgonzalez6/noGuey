$("#tables-btn").on("click", function () {
    let well = $('<div class="well">');
    
    $.get("/api/tables", function (data) {
        console.log(data);
         if (data) {
             for(let i = 0; i < data[0].length; i++){
                well.empty();
                well.append(i,buildWell(data[0][i].customerID));
             }
        }
    });
});

function buildWell(count,item){
    let h2 = $(`<h2>`);

}


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