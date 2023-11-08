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
      "expression": "0 0 4 ? * TUE,WED,THU,FRI,SAT *",
      "location": "",
      "offset": "0",
      "solarType": "all",
      "solarEvents": "sunrise,sunset"
    }
  ],
  "x": 180,
  "y": 120,
  "wires": [
    [
      "2d288c182fd973a0"
    ]
  ],
  "_order": 583
}

module.exports = Node;