const Node = {
  "id": "a85f4d9e8c7aa137",
  "type": "change",
  "z": "81d16821752304c3",
  "name": "add delay + set cron expression",
  "rules": [
    {
      "t": "set",
      "p": "config.delay_ms",
      "pt": "msg",
      "to": "config.delay_mins * 10000 * 60",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$toMillis(payload, \"[H01]:[m01]:[s01]\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload + $power(config.delay_ms, config.currentRetryAttempt)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 910,
  "y": 1080,
  "wires": [
    []
  ],
  "_order": 425
}

module.exports = Node;