const Node = {
  "id": "5f815c7f5707ec58",
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
          "id": "aee5892dbbe3d82b"
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
          "id": "b7fbaea9143be3f1",
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
  "_order": 4
}

module.exports = Node;