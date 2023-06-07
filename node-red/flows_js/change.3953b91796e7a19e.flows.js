const Node = {
  "id": "3953b91796e7a19e",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
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
  "x": 180,
  "y": 300,
  "wires": [
    [
      "6a5e831da5abdd74"
    ]
  ],
  "_order": 395
}

module.exports = Node;