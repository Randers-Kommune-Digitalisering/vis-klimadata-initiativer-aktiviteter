const Node = {
  "id": "ba6de20626a2f922",
  "type": "change",
  "z": "8571dcc8e1e9c903",
  "g": "aba12498e68c82c2",
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
      "p": "payload",
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
  "y": 500,
  "wires": [
    [
      "6a2a56ca0f18b384"
    ]
  ],
  "_order": 303
}

module.exports = Node;