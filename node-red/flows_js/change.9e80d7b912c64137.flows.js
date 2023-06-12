const Node = {
  "id": "9e80d7b912c64137",
  "type": "change",
  "z": "8b14b3c953574b40",
  "g": "0ec48b0df0503cd8",
  "name": "Fjern overflødige \\n datafelter",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "{\t   \"Month\" : payload.Month,\t   \"Industrycode_DE35\": payload.Industrycode_DE35,\t   \"TotalConsumption\": payload.TotalCon\t}\t",
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
  "y": 620,
  "wires": [
    [
      "5144e4be8fd69dbf",
      "aaf0d9f4ea9da943"
    ]
  ],
  "_order": 159
}

module.exports = Node;