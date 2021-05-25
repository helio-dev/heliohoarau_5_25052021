fetch ("http://localhost:3000/api/teddies")
.then ((res)=>res.json()
.then ((resultat)=>{
    let tableauElements = [];
    for(let cur of resultat)
    {
        tableauElements.push(document.createElement("div"));
        document.body.appendChild(tableauElements[tableauElements.length-1]);

        tableauElements.push(document.createElement("p"));
        tableauElements[tableauElements.length-1].onclick = () => console.log (hello);
        tableauElements[tableauElements.length-1].textContent = cur.name;
        tableauElements[tableauElements.length-2].appendChild(tableauElements[tableauElements.length-1]);
    }
}))

/*
main()
async function main() {
    // variable qui permet de récuperer nos articles //
    const articles = await getArticles()

   for (article of articles){    
       displayArticles(article)
   }
}
//faire une fonction async permet d'utiliser await et donc return fetch//
function getArticles(){
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
        alert(error)
    })
}

function displayArticles(article) {
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById("produit__title").textContent = article.title
    cloneElt.getElementById("produit__body").textContent = article.body

    document.getElementById("main").appendChild(cloneElt)
}
*/