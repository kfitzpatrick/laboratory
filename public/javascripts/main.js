(function () {
  $(document).ready(function () {
    var Lab = {
      log: function log(msg) {
        $("#log").append("<p>" + msg + "</p>");
      },
      logError: function logError(errorMessage) {
        var htmlToLog = [
          "<p style='color: red; font-weight: bold;'>",
          errorMessage,
          "</p>"
        ].join("");
        $("#log").append(htmlToLog);
      }
    };

    var logJsonSuccess = function (data, textStatus, request) {
      if (console && console.log) {
        console.log("data", data);
        console.log("textStatus", textStatus);
        console.log("XMLHttpRequest", request);
      }
      Lab.log("AJAX loaded successfully.");
    };

    var logJsonError = function (request, textStatus, errorThrown) {
      var errorMessage = [
        "An Error Occured in the JSON request.",
        "Status: " + textStatus
      ].join(" ");
      Lab.logError(errorMessage);
      if (console && console.error) {
        console.error(errorMessage);
        console.error(errorThrown);
      }
    };

    // Test that jQuery is installed
    Lab.log("Let's get started.");

    // Test that we can load some JSON from our fixtures
    $.ajax({
      url: 'fixtures/ajax/test.json',
      dataType: 'json',
      success: logJsonSuccess,
      error: logJsonError });

    // Test that we can load some bad JSON and see an error
    $.ajax({
      url: 'fixtures/ajax/badly_formed.json',
      dataType: 'json',
      error: logJsonError
    });
  });
})();