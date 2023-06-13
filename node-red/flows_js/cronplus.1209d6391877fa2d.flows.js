const Node = {
  "id": "1209d6391877fa2d",
  "type": "cronplus",
  "z": "8571dcc8e1e9c903",
  "g": "ec678dd8475468cc",
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
      "edbf9cf69356291d"
    ]
  ],
  "_order": 220
}

module.exports = Node;