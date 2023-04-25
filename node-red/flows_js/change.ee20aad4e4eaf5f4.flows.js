const Node = {
  "id": "ee20aad4e4eaf5f4",
  "type": "change",
  "z": "63aa29a6222f244d",
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
  "x": 910,
  "y": 140,
  "wires": [
    [
      "cb464b3750a8445d"
    ]
  ],
  "_order": 177
}

module.exports = Node;