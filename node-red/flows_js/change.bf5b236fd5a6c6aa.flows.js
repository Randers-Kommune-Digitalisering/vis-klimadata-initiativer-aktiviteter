const Node = {
  "id": "bf5b236fd5a6c6aa",
  "type": "change",
  "z": "540d125162a3e331",
  "g": "9feecf2b49446697",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "datasets",
      "pt": "flow",
      "to": "$flowContext(\"datasets\") ~> $append(dataset)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 180,
  "wires": [
    [
      "ea36709df8a686f2",
      "d6092454cb9f0be3"
    ]
  ],
  "_order": 213
}

module.exports = Node;