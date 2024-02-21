const Node = {
  "id": "2db6b45e5b5bc4be",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "cfbcffc3f4a1cd56",
  "name": "Bestem preset \\n SQL data types",
  "rules": [
    {
      "t": "set",
      "p": "sqlDataType",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "sqlDataType.created",
      "pt": "msg",
      "to": "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "sqlDataType.last_updated",
      "pt": "msg",
      "to": "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 1440,
  "wires": [
    [
      "960c17ca4e986e09"
    ]
  ],
  "_order": 538
}

module.exports = Node;