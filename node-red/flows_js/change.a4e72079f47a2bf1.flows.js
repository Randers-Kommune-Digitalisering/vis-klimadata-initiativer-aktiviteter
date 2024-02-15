const Node = {
  "id": "a4e72079f47a2bf1",
  "type": "change",
  "z": "9cd2fc26979e7dd1",
  "g": "0d869e2e9c9494bf",
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
  "y": 920,
  "wires": [
    [
      "a575a46d01c7dced"
    ]
  ],
  "_order": 496
}

module.exports = Node;