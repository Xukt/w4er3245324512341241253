var titleText = [
    'kys',
    'slit',
    'k',
    'fraud'
  ];
  
  function loop() {
    var titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = titleText[x++ % titleText.length];
  }
  
  function loaded() {
    setInterval(loop, 80);
  }
  
  var x = 0;
  
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function () {
      loaded();
    });
  } else {
    if (document.attachEvent) {
      document.attachEvent('onreadystatechange', function () {
        if (document.readyState === 'complete') {
          loaded();
        }
      });
    }
  }
  
  (function () {
    var window = self;
    var self = window;
    var document = window.document;
    var location = window.location;
    var top = window.top;
    var parent = window.parent;
    var frames = window.frames;
    var opener = window.opener;
  
    if (!self.__WB_pmw) {
      self.__WB_pmw = function (src) {
        this.__WB_source = src;
        return this;
      };
    }
  })();
  
