const Node = {
  "id": "ae66f1ad38d75578",
  "type": "change",
  "z": "aad50484a0b40b44",
  "name": "Forbered SQL \\n insert statement",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $ | {\t    \"observedAt\": observedAt ~> $toMillis() ~> $fromMillis(\"[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]\")\t} |",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "sqlvalues",
      "pt": "msg",
      "to": "data.values\t~> $map(\t    function($v, $k, $i)\t    {\t        \"('\"  & $$.data.observedAt & \"', \"\t        & \"'\" & $v.type & \"', \"\t        & \"'\" & $v.value & \"')\"\t    })\t~> $join(\", \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 580,
  "y": 1360,
  "wires": [
    [
      "258f695ab6d7dc52"
    ]
  ],
  "_order": 506
}

module.exports = Node;