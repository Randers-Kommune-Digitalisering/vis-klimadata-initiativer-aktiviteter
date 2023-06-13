const Node = {
  "id": "8ca592b0a6485c4a",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "8fa237cc848f11bd",
  "name": "Rename and set tablename \\n from dataset name",
  "rules": [
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
      "to": "\"opendata2\" & \"_\" & dataset",
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
  "x": 360,
  "y": 1640,
  "wires": [
    [
      "7692bfa6e16780ad"
    ]
  ],
  "_order": 326
}

module.exports = Node;