const Node = {
  "id": "fdedea3f8fbe1fce",
  "type": "change",
  "z": "db9cae581f57fc84",
  "name": "Set tablename \\n for drop request",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "$replace(dataset, \"-\", \"_\") /* To use the tablename in mysql/mariadb only underscores are allowed as special characters */ ",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "\"opendata\" & \"_\" & tablename",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 360,
  "y": 820,
  "wires": [
    [
      "bd35b2c70ae0b5e6"
    ]
  ],
  "_order": 367
}

module.exports = Node;