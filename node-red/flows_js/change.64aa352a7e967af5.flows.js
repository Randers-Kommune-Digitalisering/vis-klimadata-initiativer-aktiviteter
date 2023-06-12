const Node = {
  "id": "64aa352a7e967af5",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "g": "738915592c766d16",
  "name": "Byg data streng \\n og kolonnenavne",
  "rules": [
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "columnnames",
      "pt": "msg",
      "to": "$keys(data) ~> $join(\",\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "datastring",
      "pt": "msg",
      "to": "data ~> $map(\t   function($value) {\t       /* Join the values of the object into a comma-separated string */     \"(\" &\t       $join(\t           /* Iterate over the values of the object */                   $value.* ~> $map(\t               function($value) {\t                   /* If the value is a string, surround it with single quotes */                    $type($value) = \"string\" ? \"'\" &\t                   $value & \"'\" : $string($value)                         \t               }                   \t           ),\t           \",\"             \t       ) & \")\"       \t   }  \t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 450,
  "y": 640,
  "wires": [
    [
      "b3d778e0352624a2"
    ]
  ],
  "info": "",
  "_order": 182
}

Node.info = `
# Byg af datatreng og kolonnenavne til INSERT query

### JSONata udtrykket der anvendes på msg.data
Dette JSONata udtryk genererer en kommasepareret streng i 'msg.datastring' indeholdende værdierne i det angivne objekt
og omslutter strengværdierne i anførselstegn.
`

module.exports = Node;