function showNewsHeading(){
    
    var heading  = document.getElementById("news");
    console.log(heading.innerHTML);
}

function showNewsListItems(){
    
     var heading  = document.getElementById("news-list");
    
    console.log(heading.getElementsByTagName("li")[1].innerHTML);
}

function changeHeadings(){
    var news = document.getElementById("news");
    var sport = document.getElementById("sport");
    
    news.innerHTML = "Happy Time news";
    sport.innerHTML = "Bad sport you are Ricky"
}