const Node = {
  "id": "2af69c7d1a2ab999",
  "type": "change",
  "z": "4ee111634776501c",
  "name": "droptable",
  "rules": [
    {
      "t": "set",
      "p": "droptable",
      "pt": "msg",
      "to": "tables[$$.counter]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 680,
  "y": 200,
  "wires": [
    [
      "dcdaee4ed0690e3a"
    ]
  ],
  "_order": 608
}

module.exports = Node;