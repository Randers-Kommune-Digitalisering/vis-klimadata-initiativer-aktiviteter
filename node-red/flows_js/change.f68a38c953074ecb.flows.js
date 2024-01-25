const Node = {
  "id": "f68a38c953074ecb",
  "type": "change",
  "z": "752a5429c81af8a5",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "\"dst_\"&tablename",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 930,
  "y": 880,
  "wires": [
    [
      "149cd91053bda155"
    ]
  ],
  "_order": 702
}

module.exports = Node;