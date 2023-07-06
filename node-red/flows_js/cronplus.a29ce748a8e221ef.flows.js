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
      "expression": "0 0 4 ? * TUE,WED,THU,FRI,SAT *",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    }
  ],
  "x": 480,
  "y": 560,
  "wires": [
    [
      "aa2e8ce80dcb9de1"
    ]
  ],
  "_order": 305
}

module.exports = Node;