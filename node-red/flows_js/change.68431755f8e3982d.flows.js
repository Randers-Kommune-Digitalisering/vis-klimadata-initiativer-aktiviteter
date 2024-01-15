const Node = {
  "id": "68431755f8e3982d",
  "type": "change",
  "z": "c0f39fa937e7d6f9",
  "g": "c8e2659e5a564a0d",
  "name": "opendata_biogas",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "biogas",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "SELECT  cast(     concat(aarstal,\"-01-01\") as DATE    ) as År,   aarstal, husdyrsgoedning_biogas, lokalt_potentiale, andel   from opendata_biogas ",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 330,
  "y": 220,
  "wires": [
    [
      "4a1d91fc30ac4f76"
    ]
  ],
  "_order": 621
}

module.exports = Node;