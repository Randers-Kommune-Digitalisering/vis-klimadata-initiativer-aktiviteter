const Node = {
  "id": "66651f6b8cbe85b1",
  "type": "change",
  "z": "aad50484a0b40b44",
  "name": "Opsætning af \\n metadata tabelnavn",
  "rules": [
    {
      "t": "set",
      "p": "metadata_tablename",
      "pt": "flow",
      "to": "os2iot_metadata",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 120,
  "wires": [
    [
      "faf5aac920fb6d75"
    ]
  ],
  "_order": 474
}

module.exports = Node;