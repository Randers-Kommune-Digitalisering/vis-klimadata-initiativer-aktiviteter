const Node = {
  "id": "1039522f3bb90d30",
  "type": "change",
  "z": "db9cae581f57fc84",
  "name": "Opsætning af \\n dataset metadata",
  "rules": [
    {
      "t": "set",
      "p": "max_file_age_days",
      "pt": "msg",
      "to": "100",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1170,
  "y": 120,
  "wires": [
    [
      "8ba0712b7f49b9c6"
    ]
  ],
  "_order": 349
}

module.exports = Node;