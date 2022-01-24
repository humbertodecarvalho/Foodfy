const modalOverlay = document.querySelector('.modal-overlay')
const modalContent = document.querySelector('.modal-content')
const recipes = document.querySelectorAll('.recipe')

for(let i = 0; i < recipes.length; i++){
    recipes[i].addEventListener("click", function(){
        const imageName = recipes[i].getAttribute('id')

        let recipeTitle = document.getElementsByClassName('recipe-title')[i].textContent
        let recipeAuthor = document.getElementsByClassName('recipe-author')[i].textContent
        
        modalContent.getElementsByTagName('h3')[0].innerHTML=`${recipeTitle}`
        modalContent.getElementsByTagName('h4')[0].innerHTML=`${recipeAuthor}`

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src=`${imageName}`
        
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector('iframe').src=""
})