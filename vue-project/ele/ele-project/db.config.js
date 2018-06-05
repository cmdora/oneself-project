var mysql = require('mysql')  
var connection = mysql.createConnection({
    host: '0.0.0.0',
    user: 'root',
    port: '3306',
    password: 'cm*123-', 
    database: 'db_ele',
    insecureAuth: true
});

connection.connect(function (error) {
	if (error) {
		console.log('连接失败')
	} else {
		console.log('连接成功')
	}
});


module.exports = connection;