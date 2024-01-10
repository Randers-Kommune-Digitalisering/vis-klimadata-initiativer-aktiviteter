const Node = {
  "id": "02ce3ed32acfa5c7",
  "type": "change",
  "z": "067b777cae534d43",
  "g": "997f4664c676fae7",
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
      "to": "dataset_opendata",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "dataset",
      "pt": "flow",
      "to": "dataset",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "flow",
      "to": "url",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 100,
  "wires": [
    [
      "dcfa0c1347b93ca3"
    ]
  ],
  "info": "",
  "_order": 225
}

Node.info = `
https://www.opendata.dk/randers-kommune/antal-krydsende-cyklister-over-randers-fjord
`

module.exports = Node;