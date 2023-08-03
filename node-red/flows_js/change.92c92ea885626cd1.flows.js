const Node = {
  "id": "92c92ea885626cd1",
  "type": "change",
  "z": "540d125162a3e331",
  "g": "9feecf2b49446697",
  "name": "Set dataset count",
  "rules": [
    {
      "t": "set",
      "p": "count",
      "pt": "flow",
      "to": "$flowContext(\"datasets\") ~> $count()",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "currentCount",
      "pt": "flow",
      "to": "0",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1110,
  "y": 140,
  "wires": [
    [
      "427894035fe218bc"
    ]
  ],
  "_order": 216
}

module.exports = Node;