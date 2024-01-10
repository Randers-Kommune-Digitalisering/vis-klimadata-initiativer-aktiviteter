const Node = {
  "id": "9918ae66402c26ef",
  "type": "change",
  "z": "c0f39fa937e7d6f9",
  "g": "73a4ee20d5672c8c",
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
  "x": 1480,
  "y": 120,
  "wires": [
    [
      "2fbde325c6f18fd0"
    ]
  ],
  "_order": 597
}

module.exports = Node;