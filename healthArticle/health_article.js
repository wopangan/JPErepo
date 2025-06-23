var xhr = new XMLHttpRequest();
var url = "./health_article.json"; // URL of the JSON file and fetch

// XHR request
// open method -> specifies the HTTP method used for the request.
// URL -> the url where it will fetch the data.
// true -> indicates if the request is asynchronous (true) or synchronous (false).
xhr.open('GET', url, true); 

// set the expected response type to JSON format in the js file.
xhr.responseType = 'json';

// handling the 'onload' event
xhr.onload = function () {
    var articles = xhr.response.articles; // to retrieve the articles array from the JSON response.
    var articlesDiv = document.getElementById('articles'); // to retrieve the HTML element with the ID 'articles'.

    articles.forEach((article) => {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article'); // Populate HTML elements with corresponding content from the fetched JSON data.

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = "Ways to Achieve: ";

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach((way) => {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits: ';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach((benefit) => {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // elements to display each article's details on the webpage.
        articleDiv.appendChild(title);        
        articleDiv.appendChild(description);        
        articleDiv.appendChild(waysHeader);        
        articleDiv.appendChild(waysList);        
        articleDiv.appendChild(benefitsHeader);        
        articleDiv.appendChild(benefitsList);
      
        articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();

