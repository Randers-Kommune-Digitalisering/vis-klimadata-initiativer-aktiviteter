const Node = {
  "id": "b3d778e0352624a2",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "name": "Byg data streng \\n og kolonnenavne",
  "rules": [
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
  "x": 670,
  "y": 640,
  "wires": [
    [
      "1ec8023ac5f0a725"
    ]
  ],
  "info": "",
  "_order": 234
}

Node.info = `
# Byg af datatreng og kolonnenavne til INSERT query

### JSONata udtrykket der anvendes på msg.data
Dette JSONata udtryk genererer en kommasepareret streng i 'msg.datastring' indeholdende værdierne i det angivne objekt
og omslutter strengværdierne i anførselstegn.
`

module.exports = Node;