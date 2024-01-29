const Node = {
  "id": "f37762038cbbae66",
  "type": "change",
  "z": "d5880abe3145a384",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"group\":msg.tablename,\t    \"data\":msg.data\t}",
      "tot": "jsonata",
      "dc": true
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
      "p": "url",
      "pt": "msg",
      "to": "custom-data-connector-service/in/",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1220,
  "y": 600,
  "wires": [
    [
      "88ce5fc96848d12c",
      "b1f86ef6d9dbc1b0"
    ]
  ],
  "_order": 450
}

module.exports = Node;