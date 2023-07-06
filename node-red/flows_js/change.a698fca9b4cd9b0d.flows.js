const Node = {
  "id": "a698fca9b4cd9b0d",
  "type": "change",
  "z": "81d16821752304c3",
  "name": "Set retry config",
  "rules": [
    {
      "t": "set",
      "p": "config",
      "pt": "msg",
      "to": "config ? config : {}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "config.schedule_name",
      "pt": "msg",
      "to": "retry",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "config.timezone",
      "pt": "msg",
      "to": "TZ",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "config.delay_mins",
      "pt": "msg",
      "to": "1",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "config.retryAttempts",
      "pt": "msg",
      "to": "5",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "config.currentRetryAttempt",
      "pt": "msg",
      "to": "5",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 520,
  "y": 860,
  "wires": [
    [
      "821660cd29b94ceb"
    ]
  ],
  "_order": 416
}

module.exports = Node;