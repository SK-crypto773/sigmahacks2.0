function def(){
    if(document.getElementById("d1").value=="admin" && document.getElementById('d2').value=="admin"){
        window.location.href = "doctor.html";
    }
    else{
        alert("Incorrect username/password");
    }
}



function def1(){
    if(document.getElementById("p1").value=="john" && document.getElementById('p2').value=="john1"){
        window.location.href = "p1.html";
    }
    else if(document.getElementById("p1").value=="karen" && document.getElementById('p2').value=="karen1"){
        window.location.href = "p2.html";
    }
    if(document.getElementById("p1").value=="tej" && document.getElementById('p2').value=="tej1"){
        window.location.href = "p3.html";
    }
    else{
        alert("Incorrect username/password");
    }
}
