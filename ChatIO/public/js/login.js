//Maneja el login de los usuarios verificand usuario y contraseña

$(document).ready(function(){
    var socket = io('http://localhost:3000');
    $("#Login").click(function(){
        socket.emit("login", {
            user: $("#userName").val(),
            pass: $("#Password").val()
        });
    });
});