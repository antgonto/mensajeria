$(document).ready(function(){
    var socket = io('http://localhost:3000');
    $("#Login").click(function(){
        socket.emit("login", {
            user: $("#userName").val(),
            pass: $("#Password").val()
        });
    });
});