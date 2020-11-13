
function enlargeSearch(){
    let search_bar = document.getElementById("search")
    let search_view = document.getElementById("search-view")
    search_bar.classList.add("focused")
    search_view.classList.add("active")
}

function reduceSearch(){
    let search_bar = document.getElementById("search")
    let search_view = document.getElementById("search-view")
    search_bar.classList.remove("focused")
    search_view.classList.remove("active")
}

window.onclick = function (){
    let search_bar = document.getElementById("search")
    if(document.activeElement === search_bar){
        enlargeSearch() 
    } else{
        reduceSearch()
        console.log(search_bar.classList)
    }
}