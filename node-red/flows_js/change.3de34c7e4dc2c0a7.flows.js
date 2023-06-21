const Node = {
  "id": "3de34c7e4dc2c0a7",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "name": "Byg  data streng",
  "rules": [
    {
      "t": "set",
      "p": "datastring",
      "pt": "msg",
      "to": "data ~> $map(function($value)\t{\t    \"(\" & (\t    $keys($value)\t    ~> $map(function($key, $index)\t    {\t        $value ~> $lookup($key) ~> $type = \"string\" ?\t            \"'\" & ($value ~> $lookup($key) ~> $string) & \"'\" :\t                   $value ~> $lookup($key) ~> $string\t    })\t    ~> $join(\",\")\t    ) & \")\"\t})",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 1640,
  "wires": [
    [
      "780d494537906c48"
    ]
  ],
  "info": "",
  "_order": 215
}

Node.info = `
# Byg af datatreng og kolonnenavne til INSERT query

### JSONata udtrykket der anvendes på msg.data
Dette JSONata udtryk genererer en kommasepareret streng i 'msg.datastring' indeholdende værdierne i det angivne objekt
og omslutter strengværdierne i anførselstegn.
`

module.exports = Node;