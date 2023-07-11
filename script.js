$(document).ready(function() {
    $.ajax({
      url: "https://u83firebase-default-rtdb.europe-west1.firebasedatabase.app/.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
        if (data) {
          var veriler = Object.keys(data).map(function(key) {
            return data[key];
          });
  
          veriler.sort(function(a, b) {
            return b.BestComboCount - a.BestComboCount;
          });
  
          veriler.forEach(function(item, index) {
            var sira = index + 1;
            var row = "<tr id='" + item.ID + "'><td>" + sira + "</td><td>" + item.ID + "</td><td>" + item.BestComboCount + "</td><td>" + item.TotalHitCount + "</td></tr>";
            $("#veri-tablosu tbody").append(row);
          });
  
          $("#arama-butonu").on("click", function() {
            var arananID = $("#arama-input").val();
            if (arananID) {
              $("#veri-tablosu tbody tr").hide();
              $("#" + arananID).show();
            } else {
              $("#veri-tablosu tbody tr").show();
            }
          });
        }
      },
      error: function(xhr, status, error) {
        console.error(status + ": " + error);
      }
    });
  });
  