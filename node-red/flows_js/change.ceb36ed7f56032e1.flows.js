const Node = {
  "id": "ceb36ed7f56032e1",
  "type": "change",
  "z": "39591030e2e9860e",
  "g": "c0ad9a9dc97518c4",
  "name": "set counter and object",
  "rules": [
    {
      "t": "set",
      "p": "counter",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "datasql",
      "pt": "msg",
      "to": "sql",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "delete",
      "p": "sql",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "data",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1040,
  "y": 280,
  "wires": [
    [
      "b5f7bbea66ab97d3"
    ]
  ],
  "_order": 554
}

module.exports = Node;