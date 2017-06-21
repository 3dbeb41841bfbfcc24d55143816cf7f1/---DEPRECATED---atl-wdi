// students: please see bootflixAjax.js to begin working!
// you will not edit anything in here.

// "namespace" the app inside of an object for code organization
var app = new Object();

// custom request router -- do not edit, this is for the image API only!
// it will not affect your requests unless you send a request to the omdb
// image api.
app.requestRouter = function() {
  // setup ajax request pre-filter to add API key if images are called for
  $.ajaxPrefilter(function (options) {
    // if options is an object and
    // if options.url is the omdb image api and
    // if options does not have a property of apikey
    if (typeof options == "object" &&
        options.url == "img.omdbapi.com" &&
        !(options.hasOwnProperty("apikey")))
    {
      // set custom api key - do not change
      options.apikey = "d31f1a94";
    }
  });
}

// constructor for appStart
app.appStart = function() {
  // uncomment if you want to have an automatic API key added for poster API
  //var requestRouter = new app.requestRouter();
}

// $(document).ready() event
// we start our app here
$(document).ready(function(event) {
  var bootflixApp = new app.appStart();
  console.log("**Bootflix Alpha**");
  console.log("**Powered by WDI Woodstock**");
  console.log("**'' '' ''''' ' ' ''  ' ''' '**");

  // setting up our form submit event binders so you don't have to
  $("#title-search-form").on("submit", function(event) {
    event.preventDefault();
    var title = $(":input[name=title]", this).val();
    app.getMovieByTitle(title);
  });

  $("#id-search-form").on("submit", function(event) {
    event.preventDefault();
    var id = $(":input[name=id]", this).val();
    app.getMovieById(id);
  });
});
