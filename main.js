function showForm(formName) {
    var i, formContent, tab;
    formContent = document.getElementsByClassName("form-content");
    for (i = 0; i < formContent.length; i++) {
        formContent[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace("active", "");
    }
    document.getElementById(formName + "-form").style.display = "block";
    event.currentTarget.className += "active";
}
