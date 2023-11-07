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
      "p": "sql-query",
      "pt": "msg",
      "to": "sql-queries[count]",
      "tot": "jsonata",
      "dc": true
    },
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "dataset[count]",
      "tot": "jsonata",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 700,
  "y": 380,
  "wires": [
    [
      "d423f06fa505ec18"
    ]
  ],
  "_order": 489
}

module.exports = Node;