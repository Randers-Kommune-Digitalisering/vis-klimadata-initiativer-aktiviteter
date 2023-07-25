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
  "_order": 438
}

Node.template = `
[
    {
        "id": "refrigerator-sensor_309c-talkpool",
        "type": "refrigerator-sensor",
        "name": {
            "type": "Property",
            "value": "Talkpool temp - Randers"
        },
        "temperature": {
            "type": "Property",
            "value": 21.5,
            "observedAt": "2023-07-24T15:13:25.145786Z"
        },
        "humidity": {
            "type": "Property",
            "value": 45.2,
            "observedAt": "2023-07-24T15:13:25.145786Z"
        },
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