const Node = {
  "id": "4ae798ab506106d6",
  "type": "switch",
  "z": "db9cae581f57fc84",
  "g": "8fa237cc848f11bd",
  "name": "Check om datasæt \\n eksisterer i databasen",
  "property": "error.message ~> $contains(\"Table\")\tand\terror.message ~> $contains(\"doesn't exist\")",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1020,
  "y": 1640,
  "wires": [
    [
      "732b96f227d2a197"
    ],
    [
      "f96b4cd123d92f6f"
    ]
  ],
  "_order": 583
}

module.exports = Node;