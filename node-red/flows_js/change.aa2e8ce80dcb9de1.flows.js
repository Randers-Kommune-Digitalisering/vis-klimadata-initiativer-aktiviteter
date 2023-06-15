const Node = {
  "id": "aa2e8ce80dcb9de1",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "361d58eda749bdc2",
  "name": "Clean flow vars",
  "rules": [
    {
      "t": "delete",
      "p": "dataskabelon",
      "pt": "flow"
    },
    {
      "t": "delete",
      "p": "tablename",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "dataskabelon_done",
      "pt": "flow"
    },
    {
      "t": "set",
      "p": "dataskabelon_isBeingCreated",
      "pt": "flow",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "delete",
      "p": "db_done",
      "pt": "flow"
    },
    {
      "t": "set",
      "p": "db_isBeingCreated",
      "pt": "flow",
      "to": "false",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 120,
  "wires": [
    [
      "8ba0712b7f49b9c6"
    ]
  ],
  "_order": 282
}

module.exports = Node;