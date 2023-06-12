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
  "x": 950,
  "y": 540,
  "wires": [
    [
      "3a06116bba12135b"
    ]
  ],
  "_order": 242
}

module.exports = Node;