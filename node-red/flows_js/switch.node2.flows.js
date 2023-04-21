const Node = {
  "id": "node2",
  "type": "switch",
  "z": "f68edc394a4e5259",
  "name": "Check Retry Count",
  "property": "retryCount",
  "propertyType": "msg",
  "rules": [
    {
      "t": "gt",
      "v": "10",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 350,
  "y": 80,
  "wires": [
    [],
    [
      "fdc6e109d6714a6c"
    ]
  ],
  "_order": 113
}

module.exports = Node;