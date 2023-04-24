const Node = {
  "id": "3047368d4f7f9d9b",
  "type": "change",
  "z": "5d9f87f4934f2873",
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
  "x": 200,
  "y": 400,
  "wires": [
    [
      "4e0b98bc09a1a4b7"
    ]
  ],
  "_order": 240
}

module.exports = Node;