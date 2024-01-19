const Node = {
  "id": "a557078f4bc76fe0",
  "type": "cronplus",
  "z": "39591030e2e9860e",
  "g": "53b8689cf243c43d",
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
      "expression": "0 0 4 ? * MON,TUE,WED,THU,FRI *",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    }
  ],
  "x": 160,
  "y": 100,
  "wires": [
    [
      "152d7d891a5517bc"
    ]
  ],
  "_order": 667
}

module.exports = Node;