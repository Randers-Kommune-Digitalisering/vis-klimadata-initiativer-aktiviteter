const Node = {
  "id": "4570c6c9a34474fa",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "551ed5c8ce0f31c7",
  "name": "Oprydning i uaktuelle parametre",
  "rules": [
    {
      "t": "delete",
      "p": "headers",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "cronplus",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 930,
  "y": 1000,
  "wires": [
    [
      "bef728771c500c07"
    ]
  ],
  "_order": 191
}

module.exports = Node;