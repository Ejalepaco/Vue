const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'voleibol_vue',
  port: 3306,
});

connection.connect(err => {
  if (err) {
    console.error('❌ Error de conexión MySQL:', err);
    return;
  }
  console.log('✅ Conectado a MySQL');
});

module.exports = connection;
