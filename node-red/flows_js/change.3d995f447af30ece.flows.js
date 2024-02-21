const Node = {
  "id": "3d995f447af30ece",
  "type": "change",
  "z": "5ee0ae05e3ad5b5a",
  "name": "currentRetryAttempt=1",
  "rules": [
    {
      "t": "set",
      "p": "config.currentRetryAttempt",
      "pt": "msg",
      "to": "1",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "config.schedule_name",
      "pt": "msg",
      "to": "config.schedule_name & \"_1\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 120,
  "wires": [
    [
      "3fcc4bd01ebeb3cf"
    ]
  ],
  "_order": 194
}

module.exports = Node;