const Node = {
  "id": "ab6fb30a9f6541ef",
  "type": "change",
  "z": "14a0d5d3f4f8bbaa",
  "g": "8399753a47d23bb1",
  "name": "Increment file Counter",
  "rules": [
    {
      "t": "set",
      "p": "count",
      "pt": "flow",
      "to": "$flowContext(\"count\") + 1",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 1644,
  "wires": [
    [
      "4f55803b62fed940"
    ]
  ],
  "_order": 502
}

module.exports = Node;