const Node = {
  "id": "4e1b44b16c24168f",
  "type": "change",
  "z": "14a0d5d3f4f8bbaa",
  "g": "7903155cb43d8194",
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
  "x": 1210,
  "y": 480,
  "wires": [
    [
      "6c93288cd466c61d"
    ]
  ],
  "_order": 452
}

module.exports = Node;