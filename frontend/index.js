main()
function main(){
    const articles = getTeddiesArticle()
    displayArticles(articles)
}

function getTeddiesArticle(){
    //fetch va chercher les articles //
    fetch("http://localhost:3000/api/teddies")
    // fonction, a executer quand les données auront étés récupérées //
        .then(function(httpBodyResponse){ //Un return dans un then se recupère dans le then suivant //
          return httpBodyResponse.json()
        })
        .then(function(articles){
            console.log(articles)
        })
}

function displayArticles(){
    return ""
}