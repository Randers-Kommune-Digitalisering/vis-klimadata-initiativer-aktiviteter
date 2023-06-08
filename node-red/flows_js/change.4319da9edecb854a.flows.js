const Node = {
  "id": "4319da9edecb854a",
  "type": "change",
  "z": "067b777cae534d43",
  "g": "997f4664c676fae7",
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
      "4bf99afe274e672a"
    ]
  ],
  "_order": 327
}

module.exports = Node;