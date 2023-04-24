const Node = {
  "id": "1817ef0c011528f5",
  "type": "change",
  "z": "5d9f87f4934f2873",
  "name": "Opsætning af forespørgsel ↓ \\n Hent metadata for \\n msg.dataset",
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
      "to": "dataset",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 600,
  "wires": [
    [
      "675d300aedfe46e9"
    ]
  ],
  "info": "",
  "_order": 223
}

Node.info = `
https://www.opendata.dk/randers-kommune/antal-krydsende-cyklister-over-randers-fjord
`

module.exports = Node;