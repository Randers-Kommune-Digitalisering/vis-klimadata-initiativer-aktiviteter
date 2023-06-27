const Node = {
  "id": "79d37fef2b4c14c1",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "d79b62ee8e7fddf6",
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
      "to": "3",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 80,
  "wires": [
    [
      "be878228fd8c74ed"
    ]
  ],
  "_order": 281
}

module.exports = Node;