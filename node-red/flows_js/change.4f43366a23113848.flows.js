const Node = {
  "id": "4f43366a23113848",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "5ae5c599163db6e5",
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
  "x": 580,
  "y": 480,
  "wires": [
    [
      "32f0aa79f08c38f0"
    ]
  ],
  "_order": 342
}

module.exports = Node;