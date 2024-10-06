let cards = document.getElementsByClassName("flip-card")

for (const card of cards) {
  card.onclick = function(e) {
    if(this.classList.contains("flipped"))
      return;

    for (const c of cards){
      c.classList.remove("flipped");
    }

    document.getElementsByClassName("lightbox-back")[0].style.opacity = "100%";
    document.getElementsByClassName("lightbox-back")[0].style.pointerEvents = "all";
    this.classList.add("flipped");
    setTimeout(() => {
      this.classList.add("opened");
    }, 500);
  };
}

document.getElementsByClassName("lightbox-back")[0].onclick = function (e){
  this.style.opacity = "0%";
  this.style.pointerEvents = "none";
  for (const card of cards){
    card.classList.remove("flipped");
    card.classList.remove("opened");
  }
}




