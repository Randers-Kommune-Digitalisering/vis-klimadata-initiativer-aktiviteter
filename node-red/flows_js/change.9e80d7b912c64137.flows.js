const Node = {
  "id": "9e80d7b912c64137",
  "type": "change",
  "z": "8b14b3c953574b40",
  "g": "0ec48b0df0503cd8",
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
  "y": 620,
  "wires": [
    [
      "9f4f1583a1403909"
    ]
  ],
  "_order": 218
}

module.exports = Node;