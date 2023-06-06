const Node = {
  "id": "6b360b454d19172a",
  "type": "subflow",
  "name": "OpenData.dk - Randers org. - Connector (3)",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 40,
      "y": 40,
      "wires": [
        {
          "id": "c9ceb3f69f2e739e"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1320,
      "y": 320,
      "wires": [
        {
          "id": "2e39b79d2576f9ba",
          "port": 0
        },
        {
          "id": "bb89ca1a3f3c4750",
          "port": 0
        }
      ]
    },
    {
      "x": 1310,
      "y": 420,
      "wires": [
        {
          "id": "a87301fa2a0d3ad8",
          "port": 0
        }
      ]
    },
    {
      "x": 1310,
      "y": 520,
      "wires": [
        {
          "id": "91e50ea2bc982f31",
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
    "data",
    "retry"
  ],
  "icon": "node-red/inject.svg",
  "status": {
    "x": 1340,
    "y": 600,
    "wires": [
      {
        "id": "df0bf16430a72b92",
        "port": 0
      }
    ]
  },
  "_order": 13
}

module.exports = Node;