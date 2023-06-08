const Node = {
  "id": "38291a57af9afb3e",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "g": "80e6cc7cb0d92329",
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
  "x": 1170,
  "y": 420,
  "wires": [
    [
      "4587d61d62e5e743"
    ]
  ],
  "_order": 431
}

module.exports = Node;