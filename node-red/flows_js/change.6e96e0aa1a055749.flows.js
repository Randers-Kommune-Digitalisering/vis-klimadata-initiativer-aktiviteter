const Node = {
  "id": "6e96e0aa1a055749",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "g": "738915592c766d16",
  "name": "Fjern overflødige \\n datafelter",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $ | {}, $$.datafilter |",
      "tot": "jsonata"
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
  "x": 230,
  "y": 640,
  "wires": [
    [
      "64aa352a7e967af5"
    ]
  ],
  "_order": 192
}

module.exports = Node;