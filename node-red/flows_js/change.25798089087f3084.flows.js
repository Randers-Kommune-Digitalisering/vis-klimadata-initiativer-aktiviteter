const Node = {
  "id": "25798089087f3084",
  "type": "change",
  "z": "39591030e2e9860e",
  "g": "789f8d87a0aa7671",
  "name": "EDS_ConsumptionIndustry",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "EDS_ConsumptionIndustry",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "SELECT HourDK as tidspunkt, Branche as branche, ConsumptionkWh/1000 as forbrug_MWh from EDS_ConsumptionIndustry limit 999",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1510,
  "y": 140,
  "wires": [
    [
      "827f5643878e0def"
    ]
  ],
  "_order": 657
}

module.exports = Node;