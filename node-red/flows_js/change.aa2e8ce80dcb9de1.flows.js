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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 820,
  "y": 140,
  "wires": [
    [
      "8ba0712b7f49b9c6"
    ]
  ],
  "_order": 364
}

module.exports = Node;