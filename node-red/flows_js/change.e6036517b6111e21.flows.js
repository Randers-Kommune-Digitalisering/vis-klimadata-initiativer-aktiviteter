const Node = {
  "id": "e6036517b6111e21",
  "type": "change",
  "z": "b211627962aab2cb",
  "g": "6cd73e834b634e42",
  "name": "Konfigurer tabelnavn \\n + datafilter + date_column",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "eds_FORBRUG",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "datafilter",
      "pt": "msg",
      "to": "[\"MeasurementPoints\",\"MunicipalityNo\"]",
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
  "_order": 224
}

module.exports = Node;