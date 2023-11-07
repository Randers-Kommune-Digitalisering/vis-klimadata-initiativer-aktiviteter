const Node = {
  "id": "94643dbffca3ab85",
  "type": "change",
  "z": "b211627962aab2cb",
  "g": "ccd2496cc6ae9dd0",
  "name": "Konfigurer tabelnavn \\n + datafilter + date_column",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "EDS_ConsumptionIndustry",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "datafilter",
      "pt": "msg",
      "to": "[]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "HourDK",
      "pt": "msg",
      "to": "HourDK",
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
      "383a20ecf799c604"
    ]
  ],
  "_order": 304
}

module.exports = Node;