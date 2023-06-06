const Node = {
  "id": "2f62ec18bff98eec",
  "type": "change",
  "z": "14a0d5d3f4f8bbaa",
  "d": true,
  "g": "feec94d9d27d2789",
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
      "to": "/* Saml værdierne i dataobjektet i en kommasepareret streng */\t$join(\t    /* Gennemløb værdierne i dataobjektet */\t    data.* ~> $map(\t        function($v, $k, $i, $a) {\t            /* Hvis værdien er en streng, omslut den med anførselstegn */\t            $type($v) = \"string\" ? \"'\" & $v & \"'\" : $string($v)\t        }\t    ),\t    \",\"\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 1104,
  "wires": [
    [
      "2a10cb68e9b9b0f4"
    ]
  ],
  "info": "",
  "_order": 483
}

Node.info = `
# Byg af datatreng og kolonnenavne til INSERT query

### JSONata udtrykket der anvendes på msg.data
Dette JSONata udtryk genererer en kommasepareret streng i 'msg.datastring' indeholdende værdierne i det angivne objekt
og omslutter strengværdierne i anførselstegn.
`

module.exports = Node;