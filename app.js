// daje svako pitanje
const questionNode=document.querySelectorAll(".btn");
// pristupam + i - svakom NodeList
questionNode.forEach(function(item){
    
    const allButtons=item.querySelector(".buttons");
    
    
    allButtons.addEventListener('click', function(){
        questionNode.forEach(function(elem){
            if (elem !== item) {
                elem.classList.remove("show-text");
            }
        item.classList.toggle("show-text");
        
    });
});

});

