const Node = {
  "id": "8ecbeaa7475d8118",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "19c2db021d7d414f",
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
      "to": "$keys(data)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "datastring",
      "pt": "msg",
      "to": "data ~> $map(\t   function($value) {\t       /* Join the values of the object into a comma-separated string */     \"(\" &\t       $join(\t           /* Iterate over the values of the object */       \t           $value.* ~> $map(\t               function($value) {\t                   /* If the value is a string, surround it with single quotes */\t                   $type($value) = \"string\" ? \"'\" & $value & \"'\" : $string($value)         \t               }       \t           ),\t           \",\"     \t       ) & \")\"   \t   } \t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "unique_updatable_column",
      "pt": "msg",
      "to": "$map(unique_identifiable_column, function($v, $i, $a)\t{\t  $v & \" = VALUES(\" & $v & \")\" \t})",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "updateon",
      "pt": "msg",
      "to": "unique_identifiable_column ~> $exists() ?\t\"ON DUPLICATE KEY UPDATE\\n\" &\t(\tunique_identifiable_column ~> $join(\",\\n\")\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 230,
  "y": 1040,
  "wires": [
    [
      "0afd87195161da67",
      "f97cb752a3d83140"
    ]
  ],
  "info": "",
  "_order": 209
}

Node.info = `
# Byg af datatreng og kolonnenavne til INSERT query

### JSONata udtrykket der anvendes på msg.data
Dette JSONata udtryk genererer en kommasepareret streng i 'msg.datastring' indeholdende værdierne i det angivne objekt
og omslutter strengværdierne i anførselstegn.
`

module.exports = Node;