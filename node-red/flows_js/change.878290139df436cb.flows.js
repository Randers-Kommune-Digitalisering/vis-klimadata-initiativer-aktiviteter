const Node = {
  "id": "878290139df436cb",
  "type": "change",
  "z": "7b004c5e11e87f28",
  "g": "9fc7aa784e8175c5",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "\"opendata\" & \"_\" & dataset",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 230,
  "y": 100,
  "wires": [
    [
      "e32ebb307f800fb4"
    ]
  ],
  "_order": 103
}

module.exports = Node;