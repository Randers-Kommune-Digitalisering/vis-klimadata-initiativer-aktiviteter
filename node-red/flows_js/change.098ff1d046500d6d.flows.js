const Node = {
  "id": "098ff1d046500d6d",
  "type": "change",
  "z": "db9cae581f57fc84",
  "name": "Rename and set tablename \\n from dataset name",
  "rules": [
    {
      "t": "set",
      "p": "dataset_maria",
      "pt": "msg",
      "to": "$replace(dataset, \"-\", \"_\") /* To use the tablename in mysql/mariadb only underscores are allowed as special characters */ ",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "\"opendata\" & \"_\" & dataset_maria",
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
  "x": 800,
  "y": 100,
  "wires": [
    [
      "661e696cf61ea8b1"
    ]
  ],
  "_order": 392
}

module.exports = Node;