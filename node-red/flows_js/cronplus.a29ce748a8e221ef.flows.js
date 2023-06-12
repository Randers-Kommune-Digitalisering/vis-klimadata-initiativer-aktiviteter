const Node = {
  "id": "a29ce748a8e221ef",
  "type": "cronplus",
  "z": "db9cae581f57fc84",
  "g": "361d58eda749bdc2",
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
  "x": 660,
  "y": 80,
  "wires": [
    [
      "8ba0712b7f49b9c6"
    ]
  ],
  "_order": 204
}

module.exports = Node;