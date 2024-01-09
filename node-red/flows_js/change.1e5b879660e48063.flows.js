const Node = {
  "id": "1e5b879660e48063",
  "type": "change",
  "z": "d5880abe3145a384",
  "name": "Prepare for \\n database insert",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "\"dst_\"&tablename",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1020,
  "y": 560,
  "wires": [
    [
      "ebb44b8807d5e860"
    ]
  ],
  "_order": 679
}

module.exports = Node;