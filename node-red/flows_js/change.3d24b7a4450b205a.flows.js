const Node = {
  "id": "3d24b7a4450b205a",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "cfbcffc3f4a1cd56",
  "name": "Rens komma fra kolonner",
  "rules": [
    {
      "t": "set",
      "p": "columns",
      "pt": "msg",
      "to": "$substring(columns, 0, $length(columns) - 2)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 250,
  "y": 1540,
  "wires": [
    [
      "0d4ef824c81b35d3"
    ]
  ],
  "_order": 529
}

module.exports = Node;