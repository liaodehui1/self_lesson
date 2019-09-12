var mysql = require('mysql');
// 1.创建连接
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'demo'
});
// 2.连接数据库
connection.connect();
// 3.执行操作
// connection.query('SELECT * FROM `users`', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });
// id自增 设置null
connection.query('insert into users values(null,"admin","123456")', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
// 4.关闭数据库连接
connection.end();