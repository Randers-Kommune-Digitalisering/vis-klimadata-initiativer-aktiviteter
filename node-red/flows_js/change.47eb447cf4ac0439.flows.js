const Node = {
  "id": "47eb447cf4ac0439",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "1671992d0668e19b",
  "name": "Compose SQL CREATE TABLE statement",
  "rules": [
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "/* This function composes a SQL statement string that creates the database table. It depends on a valid datatypes input  */ \t\"CREATE TABLE \" & tablename & \t    \"(`last_updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \"\t    & $join(\t        datatypes.('`' & key & '` ' & mariadb_datatype),\t        \", \"\t        ) \t    & \");\"\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 720,
  "y": 900,
  "wires": [
    [
      "7ed2f33e1ca30355"
    ]
  ],
  "info": "",
  "_order": 402
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