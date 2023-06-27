const Node = {
  "id": "44a3391b74e4a6ef",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "50ce8cdc07614c53",
  "name": "Set dataset \\n & tablename",
  "rules": [
    {
      "t": "set",
      "p": "dataset",
      "pt": "msg",
      "to": "datasets[0]",
      "tot": "flow",
      "dc": true
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "\"opendata\" & \"_\" & dataset",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 810,
  "y": 760,
  "wires": [
    [
      "a00f7e1112c294b9"
    ]
  ],
  "_order": 363
}

module.exports = Node;