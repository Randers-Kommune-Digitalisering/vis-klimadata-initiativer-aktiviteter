const Node = {
  "id": "193c66aaf6ea732c",
  "type": "change",
  "z": "b211627962aab2cb",
  "g": "0959574ca3521d72",
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
  "y": 760,
  "wires": [
    [
      "41297695062f38fa"
    ]
  ],
  "_order": 280
}

module.exports = Node;