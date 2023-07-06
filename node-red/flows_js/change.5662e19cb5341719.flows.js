const Node = {
  "id": "5662e19cb5341719",
  "type": "change",
  "z": "81d16821752304c3",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "count",
      "pt": "flow",
      "to": "$flowContext(\"datasets\") ~> $count()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1400,
  "y": 160,
  "wires": [
    []
  ],
  "_order": 412
}

module.exports = Node;