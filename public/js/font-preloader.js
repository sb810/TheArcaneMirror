let fontsLoaded = false;
let windowLoaded = false;

document.fonts.ready.then(function() {
  if(!windowLoaded)
    fontsLoaded = true;
  else showPage();
});

window.onload = function() {
  if(!fontsLoaded)
    windowLoaded = true;
  else showPage();
}

function showPage() {
  setTimeout(() => {
    document.getElementsByClassName("page-spinner-wrapper")[0].style = 'opacity:0; pointer-events:none;';
  }, 500);
}
