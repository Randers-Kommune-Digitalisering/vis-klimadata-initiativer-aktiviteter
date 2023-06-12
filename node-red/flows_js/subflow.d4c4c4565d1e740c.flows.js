const Node = {
  "id": "d4c4c4565d1e740c",
  "type": "subflow",
  "name": "Database connector",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 100,
      "wires": [
        {
          "id": "3576edeecbbb87af"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 930,
      "y": 100,
      "wires": [
        {
          "id": "c00f885d81f21848",
          "port": 0
        },
        {
          "id": "076ff355c5b536f3",
          "port": 0
        },
        {
          "id": "05c7d3ab6247cfe9",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#3FADB5",
  "inputLabels": [
    "Query input"
  ],
  "outputLabels": [
    "Result output"
  ],
  "icon": "node-red/db.svg",
  "status": {
    "x": 1000,
    "y": 240,
    "wires": [
      {
        "id": "076ff355c5b536f3",
        "port": 0
      },
      {
        "id": "9ca16ae19abcd889",
        "port": 0
      }
    ]
  },
  "_order": 5
}

module.exports = Node;