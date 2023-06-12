const Node = {
  "id": "4587d61d62e5e743",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "g": "80e6cc7cb0d92329",
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
      "to": "\"opendata\" & \"_\" & dataset",
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
  "x": 560,
  "y": 520,
  "wires": [
    [
      "cc4372cb27df1b3d"
    ]
  ],
  "_order": 441
}

module.exports = Node;