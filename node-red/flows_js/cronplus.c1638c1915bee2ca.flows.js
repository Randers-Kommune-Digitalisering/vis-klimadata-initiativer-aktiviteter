const Node = {
  "id": "c1638c1915bee2ca",
  "type": "cronplus",
  "z": "452aaf8dc5cd8d45",
  "g": "3747d27918090082",
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
  "x": 280,
  "y": 120,
  "wires": [
    [
      "c680fc2ebd378756"
    ]
  ],
  "_order": 266
}

module.exports = Node;