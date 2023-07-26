const Node = {
  "id": "3f741142530fbd83",
  "type": "template",
  "z": "aad50484a0b40b44",
  "name": "TEST \\n DATA",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 210,
  "y": 140,
  "wires": [
    [
      "fcf306e4303e1c3d"
    ]
  ],
  "_order": 450
}

Node.template = `
[
    {
        "id": "refrigerator-sensor_309c-talkpool",
        "type": "refrigerator-sensor",
        "observedAt": "2023-07-24T15:13:25.145786Z",
        "name": "Talkpool temp - Randers",
        "values": [
            {
                "type": "temperature",
                "value": 21.5
            },
            {
                "type": "humidity",
                "value": 45.2
            }
        ],
        "location": {
            "type": "GeoProperty",
            "value": {
                "type": "Point",
                "coordinates": [
                    0,
                    0
                ]
            }
        }
    }
]
`

module.exports = Node;