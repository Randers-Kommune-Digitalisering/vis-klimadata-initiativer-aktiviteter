const Node = {
  "id": "376236699fa4f2cc",
  "type": "change",
  "z": "f15ef1d8b0c08ad3",
  "g": "acc1c82d640f13f3",
  "name": "Hent resultat",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload.result.resources",
      "tot": "msg"
    },
    {
      "t": "delete",
      "p": "url",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1230,
  "y": 120,
  "wires": [
    [
      "351286a4aae46341"
    ]
  ],
  "_order": 219
}

module.exports = Node;