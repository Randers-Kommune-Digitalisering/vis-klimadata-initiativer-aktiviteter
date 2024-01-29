const Node = {
  "id": "4c1c96cd5a9656ed",
  "type": "switch",
  "z": "752a5429c81af8a5",
  "g": "0a80d523e2a0a3a9",
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
  "x": 310,
  "y": 60,
  "wires": [
    [
      "dc9d2c1f8cc78462"
    ]
  ],
  "_order": 734
}

module.exports = Node;