const Node = {
  "id": "9fa283fa73a7967c",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "g": "f313bc685a48fac9",
  "name": "Oprydning i uaktuelle parametre",
  "rules": [
    {
      "t": "delete",
      "p": "url",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "method",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "headers",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "cronplus",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "topic",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "responseUrl",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "manualTrigger",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "scheduledEvent",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "redirectList",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "statusCode",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "sort",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "object",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "payload.records",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 810,
  "y": 520,
  "wires": [
    [
      "c2cbbf0ec971de2b"
    ]
  ],
  "_order": 217
}

module.exports = Node;