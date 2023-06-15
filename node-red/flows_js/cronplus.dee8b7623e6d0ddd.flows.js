const Node = {
  "id": "dee8b7623e6d0ddd",
  "type": "cronplus",
  "z": "8b14b3c953574b40",
  "g": "ca8ecf0bcc98d479",
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
      "45577688ac957f99"
    ]
  ],
  "_order": 209
}

module.exports = Node;