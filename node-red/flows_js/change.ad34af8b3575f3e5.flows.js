const Node = {
  "id": "ad34af8b3575f3e5",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "50ce8cdc07614c53",
  "name": "Clean flow vars",
  "rules": [
    {
      "t": "delete",
      "p": "dataskabelon",
      "pt": "flow"
    },
    {
      "t": "delete",
      "p": "dataset",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 820,
  "y": 1140,
  "wires": [
    [
      "e729b7eab61f6ede"
    ]
  ],
  "_order": 357
}

module.exports = Node;