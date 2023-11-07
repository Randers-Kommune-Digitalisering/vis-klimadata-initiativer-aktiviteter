const Node = {
  "id": "067b777cae534d43",
  "type": "subflow",
  "name": "OpenData.dk - Randers org. - Connector",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 40,
      "y": 40,
      "wires": [
        {
          "id": "f904d6efdc9c5403"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1340,
      "y": 280,
      "wires": [
        {
          "id": "00daa7666719f525",
          "port": 0
        },
        {
          "id": "93babe2295a453ed",
          "port": 0
        }
      ]
    },
    {
      "x": 1330,
      "y": 400,
      "wires": [
        {
          "id": "3832f63b9d5a9bad",
          "port": 0
        }
      ]
    },
    {
      "x": 1330,
      "y": 500,
      "wires": [
        {
          "id": "95f6638233c342b6",
          "port": 0
        },
        {
          "id": "aaefd9088302991c",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#E9967A",
  "outputLabels": [
    "metrics",
    "retry",
    "data"
  ],
  "icon": "node-red/inject.svg",
  "status": {
    "x": 1340,
    "y": 700,
    "wires": [
      {
        "id": "b90798fadb752547",
        "port": 0
      }
    ]
  },
  "_order": 8
}

module.exports = Node;