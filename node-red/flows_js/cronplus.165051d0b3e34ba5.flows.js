const Node = {
  "id": "165051d0b3e34ba5",
  "type": "cronplus",
  "z": "b211627962aab2cb",
  "g": "e1e61df6fde8cc6b",
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
      "b8981f871f107b11"
    ]
  ],
  "_order": 455
}

module.exports = Node;