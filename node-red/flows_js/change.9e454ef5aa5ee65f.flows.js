const Node = {
  "id": "9e454ef5aa5ee65f",
  "type": "change",
  "z": "db9cae581f57fc84",
  "d": true,
  "g": "5aba5b30e1043b2e",
  "name": "Opsætning af dataset \\n antal-krydsende-cyklister-over-randers-fjord",
  "rules": [
    {
      "t": "set",
      "p": "dataset",
      "pt": "msg",
      "to": "antal-krydsende-cyklister-over-randers-fjord",
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
  "x": 270,
  "y": 268,
  "wires": [
    [
      "583b23b99fc952a6"
    ]
  ],
  "_order": 547
}

module.exports = Node;