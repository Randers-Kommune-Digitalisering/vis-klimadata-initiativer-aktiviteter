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
  "x": 870,
  "y": 360,
  "wires": [
    [
      "c29775f4044283a1"
    ]
  ],
  "_order": 410
}

module.exports = Node;