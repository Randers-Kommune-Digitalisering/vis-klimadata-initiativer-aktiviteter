const Node = {
  "id": "f917c112938d7b5a",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "5aba5b30e1043b2e",
  "name": "Opsætning af dataset \\n braendstofforbrug",
  "rules": [
    {
      "t": "set",
      "p": "dataset",
      "pt": "msg",
      "to": "braendstofforbrug",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "max_file_age_days",
      "pt": "msg",
      "to": "50",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 280,
  "y": 340,
  "wires": [
    [
      "583b23b99fc952a6"
    ]
  ],
  "_order": 540
}

module.exports = Node;