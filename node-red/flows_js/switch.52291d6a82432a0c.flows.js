const Node = {
  "id": "52291d6a82432a0c",
  "type": "switch",
  "z": "7b004c5e11e87f28",
  "g": "9fc7aa784e8175c5",
  "name": "Datafilter ↓ \\n udvælg kun filer oprettet i day",
  "property": "payload.created ~> $substring(0,10)",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "eq",
      "v": "$substring($now(), 0, 10)",
      "vt": "jsonata"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 1470,
  "y": 140,
  "wires": [
    [
      "164ebb684530a3e9"
    ]
  ],
  "outputLabels": [
    "created today"
  ],
  "_order": 97
}

module.exports = Node;