const Node = {
  "id": "5363bce5bcbd3beb",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "name": "Opsætning af dataset \\n test-af-vad-oglavbundsjord",
  "rules": [
    {
      "t": "set",
      "p": "dataset",
      "pt": "msg",
      "to": "test-af-vad-oglavbundsjord",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "data_age_days",
      "pt": "msg",
      "to": "4",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 80,
  "wires": [
    [
      "d5b0b2e741a0a32d"
    ]
  ],
  "_order": 200
}

module.exports = Node;