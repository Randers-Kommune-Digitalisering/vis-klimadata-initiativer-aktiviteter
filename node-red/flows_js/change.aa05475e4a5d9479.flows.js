const Node = {
  "id": "aa05475e4a5d9479",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "7fe3437fd75f09f8",
  "name": "Byg updatestring",
  "rules": [
    {
      "t": "set",
      "p": "updatestring",
      "pt": "msg",
      "to": "updatable_columns ~> \t    $map\t    (\t        function($value)\t        {\t            $value & \" = VALUES(\" & $value & \")\"\t        }\t    )",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "updatestring",
      "pt": "msg",
      "to": "updatestring ~> $join(\",\\n\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 230,
  "y": 1680,
  "wires": [
    [
      "4f38f06f0b722100"
    ]
  ],
  "_order": 235
}

module.exports = Node;