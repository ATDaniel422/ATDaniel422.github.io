function checkScroll(){
    var startY = $('.nav').height(); //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.nav').addClass("scrolled");
        $('.nav-link').addClass("scrolled");
        $('#logo').addClass("scrolled");
    }else{
        $('.nav').removeClass("scrolled");
        $('.nav-link').removeClass("scrolled");
        $('#logo').removeClass("scrolled");
    }
}

if($('.nav').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}


var searchButton = document.getElementById("searchButton")
var bar = document.getElementById("searchBar")
var downloadButton = document.getElementById("downloadButton")
var url = document.getElementById("url")
const form = document.getElementById("search-form")

function startSearch() {
    var url_heading = document.createElement("h3");
    var node = document.createTextNode(bar.value);
    url_heading.appendChild(node);
    var url_div = document.getElementById("form_url");
    url_div.appendChild(url_heading);
    url.value = bar.value;
    bar.value = ""
}

function searchAfterClick() {
    if (bar.value != ""){
      startSearch()
    }
}

function searchAfterEnter(event) {
    if (bar.value != "" && event.which === 13){
      startSearch()
    }
}


// Form submission handler and API Call
const Http = new XMLHttpRequest();
const post_url = 'https://jsonplaceholder.typicode.con/posts';
const data = {
    "url":"https://tutorialspoint.com",
    "email":"ATDaniel422@gmail.com",
    "phone":7175802659
};
Http.open("POST", url);
Http.send(data);

console.log(Http.responseText)


//form.addEventListener('submit', handleFormSubmit)

searchButton.addEventListener("click", searchAfterClick);
//downloadButton.addEventListener("click", handleFormSubmit);
bar.addEventListener("keypress", searchAfterEnter);
