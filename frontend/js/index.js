/*
main()

function main(){
    const articles =getArticles()
    displayArticles(articles)
}

function getArticles(){
    fetch ("http://localhost:3000/api/teddies")
        .then(function(httpBodyResponse){
            return httpBodyResponse.json()
        }
        )
        then (function(teddies){
            console.log(teddies)
        })
}

function displayArticles(){
    return""
}
/* */ 
fetch("http://localhost:3000/api/teddies")
.then ((res)=>res.json()
.then ((resultat)=>{
    let tableauElements = [];
    for (let cur of resultat)
    {
        tableauElements.push(document.createElement("div"));
        
    }
}))

