const Node = {
  "id": "e10e1ae52ac2e480",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "d": true,
  "g": "3a1d2945c171fe3f",
  "name": "Skab dataobjekt og \\n fjern overflødige datafelter",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 600,
  "wires": [
    []
  ],
  "_order": 185
}

module.exports = Node;