const Node = {
  "id": "aaefd9088302991c",
  "type": "change",
  "z": "067b777cae534d43",
  "g": "8a31b6b1e5d45bbe",
  "name": "merge data.values \\n with file-id",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "payload ~> $map(function($v) { $merge([$v, {\"file_id\": metadata.id}]) })",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 950,
  "y": 500,
  "wires": [
    []
  ],
  "_order": 199
}

module.exports = Node;