const Node = {
  "id": "080d51ddc857aa0f",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
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
  "x": 1310,
  "y": 200,
  "wires": [
    [
      "cd2e6087b8df1d90"
    ]
  ],
  "_order": 419
}

module.exports = Node;