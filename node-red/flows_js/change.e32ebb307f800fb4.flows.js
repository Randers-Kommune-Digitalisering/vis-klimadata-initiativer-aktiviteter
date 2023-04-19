const Node = {
  "id": "e32ebb307f800fb4",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "g": "9fc7aa784e8175c5",
  "name": "Opsætning af forespørgsel ↓ \\n Hent metadata for \\n test-af-vad-oglavbundsjord",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://admin.opendata.dk/api/3/action/package_show",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "POST",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"id\":\"\",\"include_tracking\":false,\"include_tracking_children\":false,\"sort\":\"resources.metadata_created asc\"}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "payload.id",
      "pt": "msg",
      "to": "test-af-vad-oglavbundsjord",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 380,
  "wires": [
    [
      "88653441d7a95b0d"
    ]
  ],
  "info": "",
  "_order": 177
}

Node.info = `
https://www.opendata.dk/randers-kommune/antal-krydsende-cyklister-over-randers-fjord
`

module.exports = Node;