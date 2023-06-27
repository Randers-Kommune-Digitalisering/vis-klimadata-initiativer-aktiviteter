const Node = {
  "id": "ca3dc87b7d6f58a4",
  "type": "cronplus",
  "z": "db9cae581f57fc84",
  "g": "4479b20a2bb18586",
  "name": "Scheduled retry run",
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
      "expression": "0 0 4 ? * TUE,WED,THU,FRI,SAT *",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    }
  ],
  "x": 750,
  "y": 880,
  "wires": [
    [
      "a00f7e1112c294b9"
    ]
  ],
  "_order": 395
}

module.exports = Node;