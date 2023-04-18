const Node = {
  "id": "49a382e63c795f8b",
  "type": "cronplus",
  "z": "36a828017042c198",
  "g": "420f87762af87ac6",
  "name": "Scheduled run",
  "outputField": "payload",
  "timeZone": "",
  "persistDynamic": false,
  "commandResponseMsgOutput": "output1",
  "outputs": 1,
  "options": [
    {
      "name": "schedule1",
      "topic": "topic1",
      "payloadType": "default",
      "payload": "",
      "expressionType": "cron",
      "expression": "0  0  1  1  *  ",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    }
  ],
  "x": 240,
  "y": 160,
  "wires": [
    [
      "eca4a640b3925439"
    ]
  ],
  "_order": 93
}

module.exports = Node;