const Node = {
  "id": "d137d1f7aad720ca",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "92d5ed7235f71cf0",
  "name": "Fjern irellevante kolonner",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> |$|{}, ['Vej_Id', 'køretøjsart','Xkoordinat__UTM32_', 'Ykoordinat__UTM32_']|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1270,
  "y": 260,
  "wires": [
    [
      "e313e748ed2589dd",
      "2556f576f0cb911b"
    ]
  ],
  "_order": 567
}

module.exports = Node;