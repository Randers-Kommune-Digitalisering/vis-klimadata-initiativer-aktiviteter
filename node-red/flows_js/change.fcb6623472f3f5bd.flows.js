const Node = {
  "id": "fcb6623472f3f5bd",
  "type": "change",
  "z": "14a0d5d3f4f8bbaa",
  "g": "c0ab4cb3eb4c482a",
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
  "x": 1170,
  "y": 260,
  "wires": [
    [
      "6c3e609227333da8"
    ]
  ],
  "_order": 534
}

module.exports = Node;