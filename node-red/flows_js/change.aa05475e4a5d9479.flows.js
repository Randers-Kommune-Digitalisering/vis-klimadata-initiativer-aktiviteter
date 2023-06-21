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
  "y": 1520,
  "wires": [
    [
      "4f38f06f0b722100",
      "3de34c7e4dc2c0a7",
      "9b34dd2edda3e7b9"
    ]
  ],
  "_order": 174
}

module.exports = Node;