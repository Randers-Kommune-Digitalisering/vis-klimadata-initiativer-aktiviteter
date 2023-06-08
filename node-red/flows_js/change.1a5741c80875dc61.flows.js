const Node = {
  "id": "1a5741c80875dc61",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "g": "d28907ebd75f61dc",
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
  "x": 230,
  "y": 520,
  "wires": [
    [
      "f4bd6b60fe46c7ee"
    ]
  ],
  "_order": 452
}

module.exports = Node;