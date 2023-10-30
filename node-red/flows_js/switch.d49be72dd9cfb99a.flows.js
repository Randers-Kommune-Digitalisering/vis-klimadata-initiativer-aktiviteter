const Node = {
  "id": "d49be72dd9cfb99a",
  "type": "switch",
  "z": "067b777cae534d43",
  "name": "All data excluded?",
  "property": "count",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "parts.count",
      "vt": "msg"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 1370,
  "y": 340,
  "wires": [
    [
      "fc0914a8d50bc537"
    ]
  ],
  "_order": 187
}

module.exports = Node;