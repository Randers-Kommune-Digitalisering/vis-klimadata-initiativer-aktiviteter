const Node = {
  "id": "f4bd6b60fe46c7ee",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "g": "80e6cc7cb0d92329",
  "name": "Skab dataskabelon",
  "rules": [
    {
      "t": "set",
      "p": "dataskabelon",
      "pt": "msg",
      "to": "data[0]",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 510,
  "y": 420,
  "wires": [
    [
      "070f0ec16e7893d0"
    ]
  ],
  "_order": 412
}

module.exports = Node;