const Node = {
  "id": "dc300126a2092f0d",
  "type": "switch",
  "z": "aad50484a0b40b44",
  "name": "Er data tom?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "nempty"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 170,
  "y": 820,
  "wires": [
    [
      "edcd9921993e19bf"
    ],
    []
  ],
  "_order": 450
}

module.exports = Node;