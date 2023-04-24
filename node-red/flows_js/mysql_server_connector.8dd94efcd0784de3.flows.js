const Node = {
  "id": "8dd94efcd0784de3",
  "type": "MySQL-Server-Connector",
  "name": "DB",
  "host": "${DB_HOST}",
  "port": "3306",
  "user": "${DB_USER}",
  "password": "${DB_PASS}",
  "tls": false,
  "database": "${DB_DATABASE}",
  "_order": 85
}

module.exports = Node;