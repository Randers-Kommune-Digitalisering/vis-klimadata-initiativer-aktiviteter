const Node = {
  "id": "a23b1d9fd52dfbdf",
  "type": "change",
  "z": "7b004c5e11e87f28",
  "g": "0f369eeef0896547",
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
  "x": 1210,
  "y": 100,
  "wires": [
    [
      "cd287725f072abe7"
    ]
  ],
  "_order": 98
}

module.exports = Node;