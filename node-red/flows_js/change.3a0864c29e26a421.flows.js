const Node = {
  "id": "3a0864c29e26a421",
  "type": "change",
  "z": "db9cae581f57fc84",
  "d": true,
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
  "x": 1210,
  "y": 2520,
  "wires": [
    [
      "2696fceced2ea41e"
    ]
  ],
  "_order": 342
}

module.exports = Node;