const Node = {
  "id": "e01068b35a8d78bf",
  "type": "change",
  "z": "db9cae581f57fc84",
  "name": "Opsætning af \\n dataset metadata",
  "rules": [
    {
      "t": "set",
      "p": "max_file_age_days",
      "pt": "msg",
      "to": "999",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1390,
  "y": 60,
  "wires": [
    [
      "8ba0712b7f49b9c6"
    ]
  ],
  "_order": 343
}

module.exports = Node;