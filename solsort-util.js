// # Various utility functions

exports.str = (o) => { // ##
  try {
    return JSON.stringify(o, null, 2);
  } catch(e) {
    return String(o);
  }
};

exports.randomId = () => Math.random().toString(36).slice(2,12); // ##

exports.file2url = (f) => new Promise(function(resolve) {  // ##
  var reader = new FileReader();
  reader.addEventListener('load', function() { 
    resolve(reader.result); 
  });
  reader.readAsDataURL(f);
});

exports.loadImage = (src) => new Promise(function(resolve, reject) { // ##
  var img = new Image();
  img.src = src;
  img.onload = function() { resolve(img); };
  img.onerror = reject;
});

exports.escapeXml = (str) =>  // ##
  str.replace(/&/g, '&amp;').replace(/</g, '&lt;');

// # Inactive code
/*
function nosymb(str) {
  return str.replace(/[^a-zA-Z_0-9]/g, '').toLowerCase();
}

export function loadGoogleFont(font) {
  let id = 'GOOGLEFONT' + nosymb(font);
  if(document.getElementById(id)) {
    return;
  }
  let elem = document.createElement('link');
  Object.assign(elem, {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://fonts.googleapis.com/css?family=' + font,
  });
  document.head.appendChild(elem);
}
*/
