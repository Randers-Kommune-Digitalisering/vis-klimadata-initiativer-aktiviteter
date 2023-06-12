const Node = {
  "id": "64c27081fc67610d",
  "type": "change",
  "z": "db9cae581f57fc84",
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
      "to": "1",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "unique_updatable_column",
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
  "x": 320,
  "y": 420,
  "wires": [
    [
      "4ffc276ca25ea28c"
    ]
  ],
  "_order": 295
}

module.exports = Node;