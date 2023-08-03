const Node = {
  "id": "41297695062f38fa",
  "type": "change",
  "z": "b211627962aab2cb",
  "g": "0959574ca3521d72",
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
  "y": 920,
  "wires": [
    [
      "fd30cdb3c5d9be99"
    ]
  ],
  "info": "",
  "_order": 296
}

Node.info = `
# Byg af datatreng og kolonnenavne til INSERT query

### JSONata udtrykket der anvendes på msg.data
Dette JSONata udtryk genererer en kommasepareret streng i 'msg.datastring' indeholdende værdierne i det angivne objekt
og omslutter strengværdierne i anførselstegn.
`

module.exports = Node;