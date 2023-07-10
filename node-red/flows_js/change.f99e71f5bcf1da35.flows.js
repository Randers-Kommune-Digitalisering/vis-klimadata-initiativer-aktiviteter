const Node = {
  "id": "f99e71f5bcf1da35",
  "type": "change",
  "z": "db9cae581f57fc84",
  "name": "Clean flow vars",
  "rules": [
    {
      "t": "delete",
      "p": "dataskabelon",
      "pt": "flow"
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
    },
    {
      "t": "set",
      "p": "datasets",
      "pt": "flow",
      "to": "[]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 660,
  "y": 500,
  "wires": [
    [
      "e01068b35a8d78bf"
    ]
  ],
  "_order": 421
}

module.exports = Node;