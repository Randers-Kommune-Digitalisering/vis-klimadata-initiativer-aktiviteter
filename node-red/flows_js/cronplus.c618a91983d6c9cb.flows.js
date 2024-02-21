const Node = {
  "id": "c618a91983d6c9cb",
  "type": "cronplus",
  "z": "d5880abe3145a384",
  "g": "3574cfdaa6541032",
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
      "094e81a70b406e8f"
    ]
  ],
  "_order": 409
}

module.exports = Node;