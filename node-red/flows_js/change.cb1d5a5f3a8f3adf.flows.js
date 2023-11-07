const Node = {
  "id": "cb1d5a5f3a8f3adf",
  "type": "change",
  "z": "c0f39fa937e7d6f9",
  "name": "sql-statement",
  "rules": [
    {
      "t": "set",
      "p": "count",
      "pt": "msg",
      "to": "count +1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "sql-query",
      "pt": "msg",
      "to": "sql-queries[$$.count]",
      "tot": "jsonata",
      "dc": true
    },
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "dataset[$$.count]",
      "tot": "jsonata",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 640,
  "wires": [
    [
      "9dd2ba588e0b65af"
    ]
  ],
  "_order": 507
}

module.exports = Node;