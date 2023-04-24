const Node = {
  "id": "a23b1d9fd52dfbdf",
  "type": "change",
  "z": "5d9f87f4934f2873",
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
      "t": "set",
      "p": "log",
      "pt": "msg",
      "to": "\"datafiler inden for kriterie: \" & $count(payload)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1150,
  "y": 580,
  "wires": [
    [
      "aad8b87994f0fc75"
    ]
  ],
  "_order": 231
}

module.exports = Node;