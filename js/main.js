"use strict";

$(document).ready(function() {
  var form = $("#newsletter-form"),
    getJson = function getJson(postID) {
      $.getJSON(
        "https://jsonplaceholder.typicode.com/posts/" + postID,
        function(data) {
          // on loading set title,text and show relative tab
          $(".news-title", "#news-" + data.id).html(data.title);
          // generate final body text
          var html = "";
          for (var i = 0; i <= 4; i++) {
            html += "<p>" + data.body + "." + "</p>";
          }
          $(".news-text", "#news-" + data.id).html(html);
          // on load succes -> show the tab
          $("news-" + data.id).tab("show");
        }
      );
    };

  // handle news button click
  $("a, #pills-tab").on("click", function(e) {
    e.preventDefault();
    // get attr of clicked tab
    var dataID = $(this)
      .attr("href")
      .replace("#news-", "");
    // get data by button id
    getJson(dataID);
  });

  //news
  form.on("submit", function(e) {
    e.preventDefault();
    $("#newsletter-msg").show(function() {
      $(this).css({ opacity: 1 });
    });
  });

  getJson(1);
});
