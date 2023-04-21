const Node = {
  "id": "a86e0b92e4525b74",
  "type": "switch",
  "z": "7b004c5e11e87f28",
  "name": "Check for Error",
  "property": "error",
  "propertyType": "msg",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "eq",
      "v": "",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 920,
  "y": 520,
  "wires": [
    [
      "ad6cca2d2f39dd0f",
      "0339e4f57150b11e"
    ],
    [],
    []
  ],
  "_order": 109
}

module.exports = Node;