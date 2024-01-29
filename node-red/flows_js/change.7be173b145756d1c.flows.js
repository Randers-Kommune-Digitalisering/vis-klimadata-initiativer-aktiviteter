const Node = {
  "id": "7be173b145756d1c",
  "type": "change",
  "z": "c0f39fa937e7d6f9",
  "name": "LOOP \\n TRANSFORMATION",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "sql-query",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "payload.looped",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 1180,
  "wires": [
    [
      "1514b262b25ba298"
    ]
  ],
  "_order": 583
}

module.exports = Node;