const Node = {
  "id": "0d69249b77e570a0",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "8978c7606345d52b",
  "name": "dataskabelon \\n _done = true",
  "rules": [
    {
      "t": "set",
      "p": "dataskabelon_done",
      "pt": "flow",
      "to": "",
      "tot": "date"
    },
    {
      "t": "set",
      "p": "dataskabelon_isBeingCreated",
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
  "x": 950,
  "y": 780,
  "wires": [
    [
      "1f4271f61ec49e2a",
      "5701ce433742e3e1"
    ]
  ],
  "_order": 294
}

module.exports = Node;