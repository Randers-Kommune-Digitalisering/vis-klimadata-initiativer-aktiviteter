const Node = {
  "id": "21d888a3bae05278",
  "type": "change",
  "z": "39591030e2e9860e",
  "g": "80fb5b1757ce0cd1",
  "name": "Elementer til ny tabel",
  "rules": [
    {
      "t": "set",
      "p": "columns",
      "pt": "msg",
      "to": "$substring(columns, 0, $length(columns) - 2)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "newtable",
      "pt": "msg",
      "to": "dataset&\"_prep\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "columnnames",
      "pt": "msg",
      "to": "$keys(payload) ~> $join(\",\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "datastring",
      "pt": "msg",
      "to": "payload ~> $map(\t   function($value) {\t       /* Join the values of the object into a comma-separated string */     \"(\" &\t       $join(\t           /* Iterate over the values of the object */                   $value.* ~> $map(\t               function($value) {\t                   /* If the value is a string, surround it with single quotes */                    $type($value) = \"string\" ? \"'\" &\t                   $value & \"'\" : $string($value)                         \t               }                   \t           ),\t           \",\"             \t       ) & \")\"       \t   }  \t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1020,
  "y": 760,
  "wires": [
    [
      "00bb6f4f38a8e565"
    ]
  ],
  "_order": 661
}

module.exports = Node;