const addButton= document.querySelectorAll(".adder");


addButton.forEach(function(btn){
    btn.addEventListener('click', function(e){
       const parentElem=e.currentTarget.parentNode.parentNode;
       const hiddenElem=parentElem.children.item(1)
       hiddenElem.classList.toggle("showHidden");
        
    })
});


