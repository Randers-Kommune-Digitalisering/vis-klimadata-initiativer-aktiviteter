const Node = {
  "id": "a2b8a5027d33169a",
  "type": "change",
  "z": "c0f39fa937e7d6f9",
  "name": "sql-statement",
  "rules": [
    {
      "t": "set",
      "p": "count",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "datasets[count]",
      "tot": "jsonata",
      "dc": true
    },
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "sql-queries[0]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 2160,
  "y": 1040,
  "wires": [
    [
      "8916108c3c5d115f",
      "f192915d5df5f13c",
      "6c95b4cee23db2fa"
    ]
  ],
  "_order": 591
}

module.exports = Node;