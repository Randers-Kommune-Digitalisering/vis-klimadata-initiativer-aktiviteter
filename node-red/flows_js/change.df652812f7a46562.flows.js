const Node = {
  "id": "df652812f7a46562",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "16cba9e5783d458b",
  "name": "clean up secrets",
  "rules": [
    {
      "t": "delete",
      "p": "host",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "port",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "database",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "username",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "password",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 420,
  "y": 480,
  "wires": [
    [
      "54d1ba8682349156"
    ]
  ],
  "_order": 436
}

module.exports = Node;