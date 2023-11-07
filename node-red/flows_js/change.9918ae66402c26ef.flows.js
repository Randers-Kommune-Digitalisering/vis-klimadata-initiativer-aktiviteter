const Node = {
  "id": "9918ae66402c26ef",
  "type": "change",
  "z": "c0f39fa937e7d6f9",
  "name": "dataset \\n biogas",
  "rules": [
    {
      "t": "set",
      "p": "dataset",
      "pt": "msg",
      "to": "biogas",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "sql-query",
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
  "x": 220,
  "y": 160,
  "wires": [
    [
      "b363d8b7715ef1ae"
    ]
  ],
  "_order": 487
}

module.exports = Node;