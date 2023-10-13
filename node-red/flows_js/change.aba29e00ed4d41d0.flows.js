const Node = {
  "id": "aba29e00ed4d41d0",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "50ce8cdc07614c53",
  "name": "Set flow.datasets",
  "rules": [
    {
      "t": "set",
      "p": "datasets",
      "pt": "flow",
      "to": "dataset",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "datasetCount",
      "pt": "flow",
      "to": "$flowContext(\"datasets\") ~> $count()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 1180,
  "wires": [
    [
      "e729b7eab61f6ede"
    ]
  ],
  "_order": 409
}

module.exports = Node;