const Node = {
  "id": "25d7c527ef58babf",
  "type": "change",
  "z": "14a0d5d3f4f8bbaa",
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
      "to": "200",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 300,
  "wires": [
    [
      "4a8c6aab0e7e061d"
    ]
  ],
  "_order": 543
}

module.exports = Node;