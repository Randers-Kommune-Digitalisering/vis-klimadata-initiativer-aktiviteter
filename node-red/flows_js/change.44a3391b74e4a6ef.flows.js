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
      "p": "dataset_opendata",
      "pt": "msg",
      "to": "datasets[0]",
      "tot": "flow",
      "dc": true
    },
    {
      "t": "set",
      "p": "dataset",
      "pt": "msg",
      "to": "$replace(dataset, \"-\", \"_\") /* To use the tablename in mysql/mariadb only underscores are allowed as special characters */ ",
      "tot": "jsonata"
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
  "x": 1050,
  "y": 960,
  "wires": [
    [
      "a00f7e1112c294b9"
    ]
  ],
  "_order": 417
}

module.exports = Node;