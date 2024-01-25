const Node = {
  "id": "1df135d47f9fab7c",
  "type": "change",
  "z": "752a5429c81af8a5",
  "g": "4e325ed4084b5f12",
  "name": "Compose SQL CREATE TABLE statement",
  "rules": [
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "/* This function composes a SQL statement string that creates the database table. It depends on a valid datatypes input  */ \t\"CREATE TABLE \" & tablename & \" ( \" & $join(\t   datatypes.('`' & key & '` ' & mariadb_datatype),\t   \", \"\t) & \");\"\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 600,
  "y": 1020,
  "wires": [
    [
      "16a5e415058f01f0"
    ]
  ],
  "info": "",
  "_order": 711
}

Node.info = `
This code takes an array of objects (the ‘payload’) and generates a new array of objects where each object has a ‘key’ property (the original key)
 and a ‘mariadb_type’ property (the corresponding MariaDB data type).

The data type is determined based on the type of the original value and whether it matches certain conditions 
(e.g., if it’s a string, number, boolean, null, or ISO date). 
 - For strings, a VARCHAR data type with a length of 255 is used. 
 - For numbers, either DOUBLE or FLOAT is used depending on whether it’s a whole number or not. 
 - For booleans and null values, BOOLEAN and NULL are used respectively.
 - Finally, if the value matches an ISO date format, DATE is used.
`

module.exports = Node;