const Node = {
  "id": "e21c9a1c0633d855",
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
  "y": 1940,
  "wires": [
    []
  ],
  "info": "",
  "_order": 198
}

Node.info = `
# Byg af datatreng og kolonnenavne til INSERT query

### JSONata udtrykket der anvendes på msg.data
Dette JSONata udtryk genererer en kommasepareret streng i 'msg.datastring' indeholdende værdierne i det angivne objekt
og omslutter strengværdierne i anførselstegn.
`

module.exports = Node;