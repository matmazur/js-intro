/*eslint-env browser*/
/*eslint no-console: ["error", { allow: ["warn", "error","log"] }] */

function showNewsHeading() {

    var heading = document.getElementById("news");
    console.log(heading.innerHTML);
}

function showNewsListItems() {

    var heading = document.getElementById("news-list");

    console.log(heading.getElementsByTagName("li")[1].innerHTML);
}

function changeHeadings() {
    var news = document.getElementById("news");
    var sport = document.getElementById("sport");

    news.innerHTML = "Happy Time news";
    sport.innerHTML = "Bad sport you are Ricky"
}



function addNews() {
    var ul = document.getElementById("news-list");


    var input = document.getElementById("input-text");
    var news = input.value;

    if (news && news !== "") {

        var liText = document.createTextNode(news);

        var li = document.createElement("li");

        li.appendChild(liText);
        ul.appendChild(li);

        input.value = "";
        console.log(news);
    }
}

function registerEvents() {
    var button = document.getElementById("add-button");

    console.log(button.innerHTML);

    button.onclick = function () {
        addNews();
    }

}
