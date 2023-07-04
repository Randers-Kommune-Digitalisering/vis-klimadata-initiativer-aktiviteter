const Node = {
  "id": "79d37fef2b4c14c1",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "4479b20a2bb18586",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 880,
  "wires": [
    [
      "be878228fd8c74ed"
    ]
  ],
  "_order": 305
}

module.exports = Node;