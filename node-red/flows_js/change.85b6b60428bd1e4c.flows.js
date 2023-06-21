const Node = {
  "id": "85b6b60428bd1e4c",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "62d1b4969e322491",
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
  "x": 870,
  "y": 180,
  "wires": [
    [
      "4a378c40feb26413"
    ]
  ],
  "_order": 178
}

module.exports = Node;