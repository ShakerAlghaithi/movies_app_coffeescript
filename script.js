"use strict";

$(function () {


  $("#searchButton").on("click", function(e) {
    e.preventDefault();
    var userInput = $("#searchTerm").val();
    console.log(userInput);
  })


});