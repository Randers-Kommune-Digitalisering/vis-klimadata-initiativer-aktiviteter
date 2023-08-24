const Node = {
  "id": "d946b6be82a226f9",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "c42de2433bbf1d55",
  "name": "Konfigurer tabelnavn, opdaterbare kolonner, \\n nye kolonnenavne, primary keys",
  "rules": [
    {
      "t": "set",
      "p": "dst_tablename",
      "pt": "msg",
      "to": "BIL54",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "column_renaming",
      "pt": "msg",
      "to": "{\"TID\":\"Måned\",\"BILTYPE\":\"Biltype\",\"BRUG\":\"Anvendelse\",\"DRIV\":\"Drivmiddel\",\"INDHOLD\":\"Antal\"}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "updatable_columns",
      "pt": "msg",
      "to": "[\"Antal\"]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "primary_keys",
      "pt": "msg",
      "to": "[\"created\",\"Anvendelse\",\"Drivmiddel\",\"Måned\"]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "\"dst_\" & dst_tablename",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 370,
  "y": 80,
  "wires": [
    [
      "7d23dd611343c85e"
    ]
  ],
  "_order": 281
}

module.exports = Node;