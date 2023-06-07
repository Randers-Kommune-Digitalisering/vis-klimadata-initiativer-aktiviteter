const Node = {
  "id": "25f7ca1681a2ad6c",
  "type": "change",
  "z": "14a0d5d3f4f8bbaa",
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
  "y": 220,
  "wires": [
    [
      "4a8c6aab0e7e061d"
    ]
  ],
  "_order": 450
}

module.exports = Node;