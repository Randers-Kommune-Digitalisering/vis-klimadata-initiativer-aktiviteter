const Node = {
  "id": "fdfd2d8c43775b87",
  "type": "change",
  "z": "81d16821752304c3",
  "name": "add delay + set cron expression",
  "rules": [
    {
      "t": "set",
      "p": "config.delay_ms",
      "pt": "msg",
      "to": "$power(config.currentRetryAttempt, config.delay_mins)\t* 60 * 1000",
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
  "x": 870,
  "y": 1160,
  "wires": [
    []
  ],
  "_order": 426
}

module.exports = Node;