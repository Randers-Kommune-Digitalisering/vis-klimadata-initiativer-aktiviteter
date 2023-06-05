const Node = {
  "id": "be6eba4a03be6a16",
  "type": "change",
  "z": "6b360b454d19172a",
  "g": "bb671390488c23f1",
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
  "x": 540,
  "y": 100,
  "wires": [
    [
      "04f4a40ec54ef43e"
    ]
  ],
  "info": "",
  "_order": 221
}

Node.info = `
https://www.opendata.dk/randers-kommune/antal-krydsende-cyklister-over-randers-fjord
`

module.exports = Node;