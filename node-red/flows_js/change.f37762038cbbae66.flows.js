const Node = {
  "id": "f37762038cbbae66",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "4854ea2eaa259ca4",
  "name": "Request parameters",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"file\":{\t        \"value\": msg.payload,\t        \"options\": {\t            \"filename\": \"ØK\"& $replace(msg.tablename,\"_\",\"-\") & \".csv\"\t        }\t    }\t}",
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
  "x": 620,
  "y": 1260,
  "wires": [
    [
      "b1f86ef6d9dbc1b0",
      "b745a79428a7e3d0"
    ]
  ],
  "_order": 449
}

module.exports = Node;