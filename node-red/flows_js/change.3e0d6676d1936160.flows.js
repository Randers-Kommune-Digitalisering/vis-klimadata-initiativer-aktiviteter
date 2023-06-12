const Node = {
  "id": "3e0d6676d1936160",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "4cb2acab938256d7",
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
  "x": 240,
  "y": 640,
  "wires": [
    [
      "87fdfac3f0d99186"
    ]
  ],
  "_order": 258
}

module.exports = Node;