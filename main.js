function addList() {
    var li = document.createElement("li");
    var listName = document.getElementById("add").value;
    var text = document.createTextNode(listName);

    li.appendChild(text);
  
    document.getElementById("lists").appendChild(li);
    document.getElementById("add").value = ""
    
  }

/* NE FONCTIONNE PAS

  function bold() {
    li.classList.toggle("clicked");
}
li.addEventListener("click", bold);

*/