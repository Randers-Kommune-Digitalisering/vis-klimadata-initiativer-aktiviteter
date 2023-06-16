const Node = {
  "id": "85b6b60428bd1e4c",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "62d1b4969e322491",
  "name": "Konfigurer tabelnavn,  opdaterbare kolonner, \\n primary keys og max file age",
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
      "p": "tablename",
      "pt": "flow",
      "to": "\"dst_\" & dst_tablename",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "updatable_columns",
      "pt": "msg",
      "to": "[\"INDHOLD\"]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "primary_keys",
      "pt": "msg",
      "to": "[\"created\",\"BRUG\",\"DRIV\",\"TID\"]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "max_file_age_days",
      "pt": "msg",
      "to": "30",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 870,
  "y": 140,
  "wires": [
    [
      "9554cee70d08eded"
    ]
  ],
  "_order": 151
}

module.exports = Node;