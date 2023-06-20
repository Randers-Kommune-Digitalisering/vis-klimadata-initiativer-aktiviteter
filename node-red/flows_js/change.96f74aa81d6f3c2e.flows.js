const Node = {
  "id": "96f74aa81d6f3c2e",
  "type": "change",
  "z": "9cd2fc26979e7dd1",
  "g": "f2e780fbd3ecba57",
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
      "b458f5ba3d52bc0a"
    ]
  ],
  "_order": 278
}

module.exports = Node;