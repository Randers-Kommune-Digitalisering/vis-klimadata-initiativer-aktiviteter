const Node = {
  "id": "b8b69a38c0aedf34",
  "type": "change",
  "z": "8b14b3c953574b40",
  "g": "e927759a0e35212b",
  "name": "Hvis NULL sæt startdato to 2018",
  "rules": [
    {
      "t": "set",
      "p": "startdato",
      "pt": "msg",
      "to": "2018-01-01",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1110,
  "y": 280,
  "wires": [
    [
      "e330064ce7a79cc8"
    ]
  ],
  "_order": 151
}

module.exports = Node;