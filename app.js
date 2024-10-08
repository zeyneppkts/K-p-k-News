//variables
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const technologyBtn = document.getElementById("technology");
const scienceBtn = document.getElementById("science");
const entertainmentBtn = document.getElementById("entertainment");
const healthBtn = document.getElementById("health");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

//Array
var NewsDataArr = [];

//apis
const API_KEY = "8320619300c84651bc866672e88c0087";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey="
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey="
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=tr&category=technology&pageSize=8&apiKey="
const SCIENCE_NEWS = "https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey="
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey="
const HEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey="
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="


const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else{
        //handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Veri bulunamadı.</h5>"
        return;
    }

    displayNews();
}

window.onload = function() {
    newsType.innerHTML ="<h4>Haber Başlıkları</h4>";
    fetchHeadlines();
};

generalBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Genel Haberler</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>İş Hayatı</h4>";
    fetchBusinessNews();
});

technologyBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Teknoloji</h4>";
    fetchTechnologyNews();
});

scienceBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Bilim</h4>";
    fetchScienceNews();
});

entertainmentBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Eğlence</h4>";
    fetchEntertainmentNews();
});

healthBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Sağlık</h4>";
    fetchHealthNews();
});

searchBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Arama: "+newsQuery.value+"</h4>";
    fetchQueryNews();
});

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else{
        //handle erorrs
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Veri bulunamadı.</h5>"
        return;
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        NewsDataArr = myJson.articles;
    } else{
        //handle erorrs
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Veri bulunamadı.</h5>"
        return;
    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        NewsDataArr = myJson.articles;
    } else{
        //handle erorrs
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Veri bulunamadı.</h5>"
        return;
    }

    displayNews();
}

const fetchScienceNews = async () => {
    const response = await fetch(SCIENCE_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        NewsDataArr = myJson.articles;
    } else{
        //handle erorrs
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Veri bulunamadı.</h5>"
        return;
    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson);
        NewsDataArr = myJson.articles;
    } else{
        //handle erorrs
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Veri bulunamadı.</h5>"
        return;
    }

    displayNews();
}

const fetchHealthNews = async () => {
    const response = await fetch(HEALTH_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        NewsDataArr = myJson.articles;
    } else{
        //handle erorrs
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Veri bulunamadı.</h5>"
        return;
    }

    displayNews();
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY);
    newsDataArr =[];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr =myJson.articles;
    } else{
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Veri bulunamadı.</h5>"
        return;
    }

    displayNews();
}

function displayNews(){

    newsdetails.innerHTML = "";

    //if(newsDataArr.length == 0){
    //    newsdetails.innerHTML = "<h5>No data found.</h5>"
    //    return;
    //}

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col =document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height", "matchparnt");
        image.setAttribute("width", "100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var description = document.createElement('p');
        description.className="text-muted";
        description.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discriptiom);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);

    });
}

