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
  "x": 720,
  "y": 920,
  "wires": [
    [
      "1039522f3bb90d30"
    ]
  ],
  "_order": 299
}

module.exports = Node;