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
      "to": "30",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "unique_identifiable_column",
      "pt": "msg",
      "to": "[\"Fakturadato\",\"Antal_enheder\"]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 340,
  "wires": [
    [
      "e28008cad4697a29"
    ]
  ],
  "_order": 292
}

module.exports = Node;