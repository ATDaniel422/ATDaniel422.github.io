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
//----------------------------------------------------//
//----------------^^^ NAV BAR STUFF ^^^---------------//
//----------------------------------------------------//

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

function fire_the_json() {
  make_post_request()
}

function make_post_request() {
    let api_gateway_url = "https://thg7ymbqcj.execute-api.us-east-1.amazonaws.com/alpha/execution"
    let email_input = document.getElementById("email_input").value
    let url_search = document.getElementById("url_search").value
    let data_to_send {input:{\"email\":email_input,
                         \"url_search\":url_search},
                         \"stateMachineArn\":\"arn:aws:states:us-east-1:477650777108:stateMachine:Lisingo_Pipeline
  \"}
    //let sendable_json = JSON.stingify(data_to_send)

    $.ajax({
        url: api_gateway_url,
        type: "POST",
        data: data_to_send,
        dataType: "json",
        crossDomain: true,
        contentType: "application/json",
        success: function(data) {
            alert(JSON.stringify(data));
        },
        error: function(e) {
            alert("failed" + JSON.stringify(e));
        }
    });
}

// Form submission handler and API Call
// const Http = new XMLHttpRequest();
//const post_url =  "https://itxnj8spy2.execute-api.us-east-1.amazonaws.com/alpha/execution";
//const data = {
//    "url":"https://tutorialspoint.com",
//    "email":"ATDaniel422@gmail.com",
//    "phone":7175802659
//};
////Http.open("POST", post_url);
////Http.send(data);
//$('.btn').click(function(){
//    $.post(post_url, data, function(data, status){
//        console.log(`${data} and status is ${status}`)
//    });
//})
//


//form.addEventListener('submit', handleFormSubmit)
submitButton.addEventListener("click", fire_the_json);
searchButton.addEventListener("click", searchAfterClick);
bar.addEventListener("keypress", searchAfterEnter);
