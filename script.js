"use strict";

$(function () {


  $("#searchButton").on("click", function(e) {
    e.preventDefault();

    var userInput = $("#searchTerm").val();

    var request = {
      url: "http://www.omdbapi.com/",
      type: "get",
      data: {s: userInput}
    }

    var response = $.ajax(request)

    response.done(function (data) {
      console.log(data);
    });



  })


});