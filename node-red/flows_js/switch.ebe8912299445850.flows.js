const Node = {
  "id": "ebe8912299445850",
  "type": "switch",
  "z": "db9cae581f57fc84",
  "g": "05fc82ad62ba62fa",
  "name": "DB \\n _isBeingCreated?",
  "property": "db_isBeingCreated",
  "propertyType": "flow",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 410,
  "y": 2000,
  "wires": [
    [
      "abe7fa69de34435f"
    ],
    [
      "6e3a4eb1fedaa0ef"
    ]
  ],
  "_order": 314
}

module.exports = Node;