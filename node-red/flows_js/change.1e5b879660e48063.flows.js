const Node = {
  "id": "1e5b879660e48063",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "2abe0180ccd5533c",
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
  "x": 420,
  "y": 780,
  "wires": [
    [
      "e45a491888de725a"
    ]
  ],
  "_order": 425
}

module.exports = Node;