const Node = {
  "id": "ada1085ad5696009",
  "type": "change",
  "z": "6b360b454d19172a",
  "g": "bb671390488c23f1",
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
      "3acaac41151b641f"
    ]
  ],
  "_order": 261
}

module.exports = Node;