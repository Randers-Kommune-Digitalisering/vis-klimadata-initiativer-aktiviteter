const Node = {
  "id": "42cf241dbe6b2499",
  "type": "cronplus",
  "z": "9cd2fc26979e7dd1",
  "g": "d0265b9f621b187d",
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
      "a5c3f93376226daa"
    ]
  ],
  "_order": 257
}

module.exports = Node;