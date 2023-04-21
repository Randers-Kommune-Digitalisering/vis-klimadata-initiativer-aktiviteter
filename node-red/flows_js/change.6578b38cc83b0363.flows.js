const Node = {
  "id": "6578b38cc83b0363",
  "type": "change",
  "z": "7b004c5e11e87f28",
  "g": "9fc7aa784e8175c5",
  "name": "Hent resultat",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload.result.resources",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 100,
  "wires": [
    [
      "f1bd9a91ba21b9c3"
    ]
  ],
  "_order": 101
}

module.exports = Node;