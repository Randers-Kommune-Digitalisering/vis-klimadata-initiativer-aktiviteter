const Node = {
  "id": "a1b312bc38e81c73",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
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
  "x": 250,
  "y": 240,
  "wires": [
    [
      "6a5e831da5abdd74"
    ]
  ],
  "_order": 256
}

module.exports = Node;