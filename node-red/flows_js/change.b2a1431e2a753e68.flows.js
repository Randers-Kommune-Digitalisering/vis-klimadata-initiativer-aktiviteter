const Node = {
  "id": "b2a1431e2a753e68",
  "type": "change",
  "z": "752a5429c81af8a5",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data",
      "tot": "flow",
      "dc": true
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "table",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 700,
  "y": 880,
  "wires": [
    [
      "444256e42b5f9b53",
      "f68a38c953074ecb"
    ]
  ],
  "_order": 715
}

module.exports = Node;