document.getElementById("log").style.display = "none";
document.getElementById("pas").style.display = "none";


function show() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    if (login === '' && password === '') {
        document.getElementById("log").style.display = "block";
        document.getElementById("pas").style.display = "block";
    } else if (login === '') {
        document.getElementById("log").style.display = "block";
        document.getElementById("pas").style.display = "none";
    } else if (password === '') {
        document.getElementById("log").style.display = "none";
        document.getElementById("pas").style.display = "block";
    } else {
        document.getElementById("log").style.display = "none";
        document.getElementById("pas").style.display = "none";
    }
}