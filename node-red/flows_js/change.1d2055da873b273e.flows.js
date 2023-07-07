const Node = {
  "id": "1d2055da873b273e",
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
      "to": "2",
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
      "to": "4",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 1540,
  "wires": [
    [
      "59c7134aa3612b9c"
    ]
  ],
  "_order": 449
}

module.exports = Node;