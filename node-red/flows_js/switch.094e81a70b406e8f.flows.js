const Node = {
  "id": "094e81a70b406e8f",
  "type": "switch",
  "z": "d5880abe3145a384",
  "g": "3574cfdaa6541032",
  "name": "Dev. env.?",
  "property": "DEV_ENVIROMENT",
  "propertyType": "env",
  "rules": [
    {
      "t": "neq",
      "v": "true",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 350,
  "y": 120,
  "wires": [
    [
      "73d9f3d806602b9f"
    ]
  ],
  "_order": 419
}

module.exports = Node;