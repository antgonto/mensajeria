var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: "CHATIO",
  user: "chatioapp",
  password: "P@$$W0rd",
  port: 3306
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT Login(N'diegoalru', N'qwert');", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

