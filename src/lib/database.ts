import mysql from 'mysql2/promise';

export const database = mysql.createPool({
  host: 'cakradigital.my.id',
  user: 'pandawa',
  password: 'Digitalization02022002',
  database: 'pandawa',
});
  