const Node = {
  "id": "dc87574244d4b881",
  "type": "change",
  "z": "81d16821752304c3",
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
  "x": 970,
  "y": 200,
  "wires": [
    [
      "2cf40ba3fe887f0f",
      "c0fdcadb42e738a5"
    ]
  ],
  "_order": 407
}

module.exports = Node;