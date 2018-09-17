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
var request = require('request');
var form_data = {
    "url": form.
}

const form = document.getElementById("search-form");

const formToJson = elements => [].reduce.call(elements, (data, element) => {
    if(isValidElement(element)) {
        data[element.name] = element.value;
    }

    return data;
}, {});

const handleFormSubmit = event => {
    const data = formToJson(form.elements);
    const dataContainer = document.getElementById("search-form");
    dataContainer.textContent = JSON.stringify(data, null, " ");

    console.log(dataContainer.textContent)
    // Make the API Call here.
}

const isValidElement = element => {
    return element.name && element.value;
}


form.addEventListener('submit', handleFormSubmit)

searchButton.addEventListener("click", searchAfterClick);
downloadButton.addEventListener("click", handleFormSubmit);
bar.addEventListener("keypress", searchAfterEnter);
