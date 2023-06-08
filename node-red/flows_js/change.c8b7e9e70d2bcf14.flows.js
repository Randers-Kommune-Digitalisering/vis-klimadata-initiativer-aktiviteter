const Node = {
  "id": "c8b7e9e70d2bcf14",
  "type": "change",
  "z": "14a0d5d3f4f8bbaa",
  "g": "c0ab4cb3eb4c482a",
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
  "x": 880,
  "y": 340,
  "wires": [
    [
      "712b4cbc0da79c3f"
    ]
  ],
  "_order": 533
}

module.exports = Node;