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
      "p": "datastring_old_test",
      "pt": "msg",
      "to": "/* Saml værdierne i dataobjektet i en kommasepareret streng */\t$join(\t    /* Gennemløb værdierne i dataobjektet */\t    data.* ~> $map(\t        function($v, $k, $i, $a) {\t            /* Hvis værdien er en streng, omslut den med anførselstegn */\t            $type($v) = \"string\" ? \"'\" & $v & \"'\" : $string($v)\t        }\t    ),\t    \",\"\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "datastring",
      "pt": "msg",
      "to": "data ~> $map(\t   function($value) {\t       /* Join the values of the object into a comma-separated string */     \"(\" &\t       $join(\t           /* Iterate over the values of the object */       $value.* ~> $map(\t               function($value) {\t                   /* If the value is a string, surround it with single quotes */\t                   $type($value) = \"string\" ? \"'\" & $value & \"'\" : $string($value)         \t               }       \t           ),\t           \",\"     \t       ) & \")\"   \t   } \t)",
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
      "0afd87195161da67"
    ]
  ],
  "info": "",
  "_order": 554
}

Node.info = `
# Byg af datatreng og kolonnenavne til INSERT query

### JSONata udtrykket der anvendes på msg.data
Dette JSONata udtryk genererer en kommasepareret streng i 'msg.datastring' indeholdende værdierne i det angivne objekt
og omslutter strengværdierne i anførselstegn.
`

module.exports = Node;