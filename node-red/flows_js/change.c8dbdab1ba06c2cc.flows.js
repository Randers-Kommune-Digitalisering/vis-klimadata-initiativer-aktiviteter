const Node = {
  "id": "c8dbdab1ba06c2cc",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "3574cfdaa6541032",
  "name": "Datasets/queries and \\n loop counter",
  "rules": [
    {
      "t": "set",
      "p": "datasets",
      "pt": "msg",
      "to": "query",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "counter",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1040,
  "y": 200,
  "wires": [
    [
      "ee87e2e27ec60aa1",
      "46501366d3727083"
    ]
  ],
  "_order": 418
}

module.exports = Node;