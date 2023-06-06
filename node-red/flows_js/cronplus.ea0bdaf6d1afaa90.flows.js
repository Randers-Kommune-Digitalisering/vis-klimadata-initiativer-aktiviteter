const Node = {
  "id": "ea0bdaf6d1afaa90",
  "type": "cronplus",
  "z": "14a0d5d3f4f8bbaa",
  "g": "a907b88cc330cea1",
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
  "x": 300,
  "y": 100,
  "wires": [
    [
      "4ff6415d29bb42e7"
    ]
  ],
  "_order": 498
}

module.exports = Node;