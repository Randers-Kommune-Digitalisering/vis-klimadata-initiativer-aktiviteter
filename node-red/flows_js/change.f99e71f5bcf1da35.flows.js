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
      "t": "delete",
      "p": "datasets",
      "pt": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 660,
  "y": 360,
  "wires": [
    [
      "e01068b35a8d78bf"
    ]
  ],
  "_order": 399
}

module.exports = Node;