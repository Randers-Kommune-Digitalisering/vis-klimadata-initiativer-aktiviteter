const Node = {
  "id": "b5451e7237d7ba50",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "g": "2bb7d935665ca30a",
  "name": "Konfigurer tabelnavn \\n + datafilter",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "eds_PRODUKTION",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "datafilter",
      "pt": "msg",
      "to": "[\"MunicipalityNo\",\"OffshoreWindPower\",\"CentralPower\",\"DecentralPower\"]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 760,
  "y": 120,
  "wires": [
    [
      "75180c20a021e5c4"
    ]
  ],
  "_order": 222
}

module.exports = Node;