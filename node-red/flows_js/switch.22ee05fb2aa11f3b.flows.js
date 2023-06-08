const Node = {
  "id": "22ee05fb2aa11f3b",
  "type": "switch",
  "z": "7b004c5e11e87f28",
  "g": "2e3370dafaa81dac",
  "name": "Check statusCode for sucess",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "200",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 640,
  "y": 460,
  "wires": [
    [
      "7d50abf0d3091c7b"
    ],
    [
      "e5361e70221c8772"
    ]
  ],
  "_order": 187
}

module.exports = Node;