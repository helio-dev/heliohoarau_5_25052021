main()
async function main(){
    const articles = await getTeddiesArticle()
   for (let i = 0;i < articles.length; i++){
       const article = articles[i];
       displayArticle(articles)
   }
}
//faire une fonction async permet d'utiliser await et donc return fetch//
 function getTeddiesArticle(){
    //fetch va chercher les articles //
     return fetch("http://localhost:3000/api/teddies")
    // fonction, a executer quand les données auront étés récupérées //
        .then(function(httpBodyResponse){ //Un return dans un then se recupère dans le then suivant //
          return httpBodyResponse.json()
        })
        .then(function(articles){
            return articles
        })
        //Backup de gestion d'erreur au cas ou l'api soit down et que le fecth n'arrive pas à destination//
        .catch(function(error){
            alert(eror)
        })
}

function displayArticles() {
    document.getElementById("main").innerHTML += '
    <div class="container" id="main"></div>'
    
}