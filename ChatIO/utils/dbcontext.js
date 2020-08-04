const mysql = require('mysql');
const dotenv = require('dotenv');

//dotenv.config({ path: '../env/.env'});

let con = mysql.createConnection({
    host:       "52.171.52.220",
    database:   "CHATIO",
    user:       "CHATIOAPP",
    password:   "P@$$W0rd",
    port:       3306,
    typeCast: function castField( field, useDefaultTypeCasting ) {
        if ( ( field.type === "BIT" ) && ( field.length === 1 ) ) {
            let bytes = field.buffer();
            return( bytes[ 0 ] === 1 );
        }
        return( useDefaultTypeCasting() );
    }
});

/*con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT Login(N'diegoalru', N'qwerty') AS Login;", function (err, result, fields) {
        if (err) throw err;
        const json =  JSON.parse(JSON.stringify(result));
        console.log(json[0].Login);
    });
})*/

function ValidarLogin(Username, Password){
    con.connect(function (err) {
        var query = `SELECT Login(N'${Username}', N'${Password}') AS Login;`;
        if (err) throw err;
        con.query(query, function (err, result, fields) {
            if (err) throw err;
            const json =  JSON.parse(JSON.stringify(result));
            return json[0].Login;
        });
    });
}

module.exports = {
    ValidarLogin
}