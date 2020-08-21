///Formato de los mensajes enviados al chat

const moment = require('moment');

function formatMessage(username, text){
    return {
        username
        ,text
        ,time: moment().format('h:mm a')
    }
}

module.exports = formatMessage;