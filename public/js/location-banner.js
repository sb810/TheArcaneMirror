const url = 'https://freeipapi.com/api/json'; // Get current request's IP info
let city = localStorage.getItem('cityName'); // Retrieve city from local storage
let bannerDismissed = sessionStorage.getItem('bannerDismissed');

createBanner()

function createBanner() {
  if(bannerDismissed)
    return;

  if(!city)
    fetchCity()

  if (city === "Montreal") {
    let el = document.querySelector(".navbar.sticky-top").parentElement.parentElement;
    let banner = document.createElement("div");
    banner.classList.add("banner");
    let bannerText = banner.appendChild(document.createElement("p"));
    bannerText.innerHTML = "<span>Near " + city + "?</span> " + "<a href='https://www.facebook.com/events/994227089258795/permalink/994227115925459'>Check out our Tarot & Tea event!</a><button onclick='dismissBanner()' type=\"button\" class=\"btn-close btn-close-white\" aria-label=\"Close\"></button>";
    el.insertBefore(banner, el.firstElementChild);
  }
}

function fetchCity()
{
  fetch(url)
    .then(response => response.json())
    .then(data => {
      try {
        city = data.cityName;
      } catch (e) {
        console.error(e.responseText);
      }
      localStorage.setItem('cityName', city); // Store city in local storage
      console.log('City retrieved from API and stored in local storage:', city);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function dismissBanner()
{
  bannerDismissed = true;
  sessionStorage.setItem('bannerDismissed', "true");
  document.querySelector(".banner").remove();
}

