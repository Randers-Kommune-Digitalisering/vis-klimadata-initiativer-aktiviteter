const Node = {
  "id": "6e054ca0f1ed231a",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "1671992d0668e19b",
  "name": "Generate datatypes from first datarow",
  "rules": [
    {
      "t": "set",
      "p": "datatypes",
      "pt": "msg",
      "to": "$map(\t   data[0],\t   function($v, $k) {\t       $each(\t           $v,\t           function($value, $key) {{\t    \"key\": $key,\t    \"mariadb_datatype\": \t    /* Check the type of the value */\t    $value ~> $type() = \"string\" ? \"VARCHAR(255)\" :\t    /* Check if the value is a number */\t    $value ~> $type() = \"number\" ? (\t        /* Check if the number is an integer */\t        $value ~> $floor() = $ ? \"INT\" :\t        /* Check if the number is a decimal */\t        $value ~> $floor() != $ ? \"DECIMAL(10,2)\" : undefined\t    ) :\t    $value ~> $type() = \"boolean\" ? \"BOOLEAN\" :\t    $value ~> $type() = \"null\" ? \"NULL\" :\t    /* Check for ISO dates */\t    /^([0-9]{4})(-|\\/|.)(1[0-2]|0[1-9])(-|\\/|.)(3[01]|[12][0-9]|0[1-9])$|^(3[01]|[12][0-9]|0[1-9])(-|\\/|.)(1[0-2]|0[1-9])(-|\\/|.)([0-9]{4})$/ ? \"DATE\" : undefined\t}            \t    }\t       )\t}\t)\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 370,
  "y": 800,
  "wires": [
    [
      "47eb447cf4ac0439"
    ]
  ],
  "info": "",
  "_order": 695
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