
function resizeIframe() {
  var iframes = document.getElementsByClassName('quarto-iframe');

  for (var i = 0; i < iframes.length; i++) {
    var iframe = iframes[i];
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframe.style.height = (innerDoc.body.scrollHeight + 20) + 'px';
  }
}

// Call the resizeIframe function whenever the content inside any iframe with the class 'myIframe' changes
window.onload = function () {
  resizeIframe();
  // You might also want to bind this to other events like resize or content changes in the iframe
  // For example: iframe.contentWindow.addEventListener('resize', resizeIframe);
};

