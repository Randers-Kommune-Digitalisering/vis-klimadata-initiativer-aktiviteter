const Node = {
  "id": "3a2c20021c59c43c",
  "type": "cronplus",
  "z": "7f3219f0beb025c3",
  "g": "dce8b91a0662f793",
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
  "x": 180,
  "y": 280,
  "wires": [
    [
      "3af44629275ce741"
    ]
  ],
  "_order": 250
}

module.exports = Node;