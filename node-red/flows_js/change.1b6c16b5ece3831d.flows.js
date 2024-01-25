const Node = {
  "id": "1b6c16b5ece3831d",
  "type": "change",
  "z": "b211627962aab2cb",
  "g": "6cb75d07c897709b",
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
  "y": 620,
  "wires": [
    [
      "2b62973ed9f21b58"
    ]
  ],
  "_order": 452
}

module.exports = Node;