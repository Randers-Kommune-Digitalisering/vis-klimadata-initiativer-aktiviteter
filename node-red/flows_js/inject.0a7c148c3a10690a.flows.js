const Node = {
  "id": "0a7c148c3a10690a",
  "type": "inject",
  "z": "aad50484a0b40b44",
  "name": "TEST",
  "props": [
    {
      "p": "parts",
      "v": "{\"id\":\"870256d85eba2563\",\"type\":\"array\",\"count\":1,\"len\":1,\"index\":0}",
      "vt": "json"
    },
    {
      "p": "data",
      "v": "{\"id\":\"refrigerator-sensor_309c-talkpool\",\"type\":\"refrigerator-sensor\",\"observedAt\":\"2023-07-24T15:13:25.145786Z\",\"name\":\"Talkpool temp - Randers\",\"values\":[{\"type\":\"temperature\",\"value\":21.5},{\"type\":\"humidity\",\"value\":45.2}],\"location\":{\"type\":\"GeoProperty\",\"value\":{\"type\":\"Point\",\"coordinates\":[0,0]}}}",
      "vt": "json"
    },
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "[{\"last_observation\":\"0000-00-00 00:00:00\"}]",
  "payloadType": "json",
  "x": 350,
  "y": 1220,
  "wires": [
    []
  ],
  "_order": 479
}

module.exports = Node;