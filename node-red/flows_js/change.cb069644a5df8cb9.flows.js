const Node = {
  "id": "cb069644a5df8cb9",
  "type": "change",
  "z": "5ee0ae05e3ad5b5a",
  "name": "add delay + set cron expression",
  "rules": [
    {
      "t": "set",
      "p": "config.delay_ms",
      "pt": "msg",
      "to": "$power(config.delay_mins * 6, config.currentRetryAttempt) * 10\t* 1000",
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
      "to": "payload + config.delay_ms",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$fromMillis(payload, \"[s01] [m01] [H01]\") & \" * * *\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"command\": \"add\",\t    \"name\": config.schedule_name,\t    \"expression\": payload,\t    \"expressionType\": \"cron\",\t    \"payloadType\": \"default\",\t    \"limit\": 1\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1210,
  "y": 120,
  "wires": [
    [
      "2835de477f322eca",
      "ca3dc87b7d6f58a4"
    ]
  ],
  "_order": 146
}

module.exports = Node;