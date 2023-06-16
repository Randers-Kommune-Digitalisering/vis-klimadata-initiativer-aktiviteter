const Node = {
  "id": "3eb09dda45462a10",
  "type": "change",
  "z": "9cd2fc26979e7dd1",
  "g": "8edb997a61d98957",
  "name": "Konfigurer tabelnavn \\n + datafilter + date_column",
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
    },
    {
      "t": "set",
      "p": "date_column",
      "pt": "msg",
      "to": "Month",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 770,
  "y": 120,
  "wires": [
    [
      "21843d1518b67d7e"
    ]
  ],
  "_order": 262
}

module.exports = Node;