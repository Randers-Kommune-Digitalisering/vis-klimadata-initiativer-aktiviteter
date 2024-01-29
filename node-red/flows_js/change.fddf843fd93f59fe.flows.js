const Node = {
  "id": "fddf843fd93f59fe",
  "type": "change",
  "z": "39591030e2e9860e",
  "g": "53b8689cf243c43d",
  "name": "global => payload",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "opendataDone",
      "tot": "global"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 910,
  "y": 100,
  "wires": [
    [
      "c581321e1eb0b147"
    ]
  ],
  "_order": 676
}

module.exports = Node;