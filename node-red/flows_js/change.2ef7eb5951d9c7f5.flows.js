const Node = {
  "id": "2ef7eb5951d9c7f5",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "4cb2acab938256d7",
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
  "x": 550,
  "y": 2080,
  "wires": [
    [
      "87fdfac3f0d99186"
    ]
  ],
  "_order": 356
}

module.exports = Node;