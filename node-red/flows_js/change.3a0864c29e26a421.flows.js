const Node = {
  "id": "3a0864c29e26a421",
  "type": "change",
  "z": "db9cae581f57fc84",
  "name": "build metrics",
  "rules": [
    {
      "t": "set",
      "p": "payload.metrics",
      "pt": "msg",
      "to": "{\t   \"op\": \"inc\",\t   \"val\": 1,\t   \"labels\": {\t       \"dataset\": dataset,\t       \"data-status\" : \"downloaded \" & $count(data) & \" lines of data distributed in \" &\t        $count($split(columns, ',')) & \" columns\"   \t   } \t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1610,
  "y": 380,
  "wires": [
    [
      "9ca2fc1630c7af63"
    ]
  ],
  "_order": 549
}

module.exports = Node;