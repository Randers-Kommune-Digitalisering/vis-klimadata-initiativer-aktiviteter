const Node = {
  "id": "a85f4d9e8c7aa137",
  "type": "change",
  "z": "81d16821752304c3",
  "name": "add delay + set cron expression",
  "rules": [
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
      "to": "payload + (config.delay_mins * config.currentRetryAttempt) * 60000",
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
  "x": 1090,
  "y": 940,
  "wires": [
    [
      "29fecad4413f3bc3",
      "2d29a6dd7941906f"
    ]
  ],
  "_order": 412
}

module.exports = Node;