function toggleMenu(){
    let sidebar = document.getElementById("sidebar");

    if(sidebar.style.left === "0px"){
        sidebar.style.left = "-200px";
    } else {
        sidebar.style.left = "0px";
    }
}

/* SEARCH FILTER */
document.getElementById("search").addEventListener("input", function(){
    let value = this.value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for(let i=0;i<cards.length;i++){
        let text = cards[i].innerText.toLowerCase();
        cards[i].style.display = text.includes(value) ? "block" : "none";
    }
});