const Node = {
  "id": "6c7c743d5b7e2aab",
  "type": "change",
  "z": "5ee0ae05e3ad5b5a",
  "name": "currentRetryAttempt+1",
  "rules": [
    {
      "t": "set",
      "p": "config.currentRetryAttempt",
      "pt": "msg",
      "to": "config.currentRetryAttempt+1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "config.schedule_name",
      "pt": "msg",
      "to": "config.schedule_name & \"_\" & config.currentRetryAttempt",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 80,
  "wires": [
    [
      "3fcc4bd01ebeb3cf"
    ]
  ],
  "_order": 168
}

module.exports = Node;