const Node = {
  "id": "bc579960ccc53cb1",
  "type": "change",
  "z": "9cd2fc26979e7dd1",
  "g": "239cde6bcb115e82",
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
  "x": 310,
  "y": 80,
  "wires": [
    [
      "15cff38df5958f84"
    ]
  ],
  "_order": 329
}

module.exports = Node;