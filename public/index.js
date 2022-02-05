$(document).on('click', '#button', function (e) {
  $.getJSON("/roll", function (results) {
    $("#sorted").removeClass("hidden");
    // Show current roll
    $("#roll .dice").empty();

    results.roll.forEach(function (number) {
      $("#roll .dice").append("<div class='die die" + number + "'></div>");
    });

    // Show individual results
    const numbers = ["1", "2", "3", "4", "5", "6"];
    numbers.forEach(function (number) {
      $("#die" + number + " .options").empty();
      // append each option
      if (typeof results[number] !== 'undefined') {
        results[number].forEach(function (result) {
          var combo1 = "<div class='value'>" + (result[0][0] + result[0][1]) +"</div><div class='die die" + result[0][0] + "'></div><div class='die die" + result[0][1] + "'></div>";
          var combo2 = "<div class='value'>" + (result[1][0] + result[1][1]) + "</div><div class='die die" + result[1][0] + "'></div><div class='die die" + result[1][1] + "'></div>";
          var option = "<div class='option1'>" + combo1 + "</div><div class='option2'>" + combo2 + "</div>";

          $("#die" + number + " .options").append("<div class='option'>" + option + "</div>");
        });
      } else {
        $("#die" + number + " .options").append("<div>No dice for this value</div>");
      };
    });

  });
});
