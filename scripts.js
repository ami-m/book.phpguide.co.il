(function() {
  var _gaq;

  window.load = function(js, callback) {
    var firstScriptTag, node, scriptTags;
    node = document.createElement("script");
    node.type = "text/javascript";
    node.async = true;
    node.src = js;
    if (callback) {
      node.onload = callback;
    }
    scriptTags = document.getElementsByTagName("script");
    if (!firstScriptTag) {
      firstScriptTag = scriptTags[scriptTags.length - 1];
    }
    return firstScriptTag.parentNode.insertBefore(node, firstScriptTag);
  };

  if (window.document.location.hostname === "book.phpguide.co.il") {
    _gaq = _gaq || [];
    _gaq.push(["_setAccount", "UA-18788673-4"]);
    _gaq.push(["_trackPageview"]);
    window.load("http://www.google-analytics.com/ga.js");
  }

}).call(this);
