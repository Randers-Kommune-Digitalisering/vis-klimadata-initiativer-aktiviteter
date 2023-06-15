const Node = {
  "id": "85b6b60428bd1e4c",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "62d1b4969e322491",
  "name": "Konfigurer tabelnavn + \\n opdaterbar kolonner og primary keys",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "dst_BIL54",
      "tot": "str"
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 850,
  "y": 140,
  "wires": [
    [
      "f332853c388a1c3d"
    ]
  ],
  "_order": 152
}

module.exports = Node;