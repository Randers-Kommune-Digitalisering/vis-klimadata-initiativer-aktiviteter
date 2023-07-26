const Node = {
  "id": "40c4b4012f6c88d2",
  "type": "change",
  "z": "db9cae581f57fc84",
  "d": true,
  "name": "Set tablename",
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
  "x": 1560,
  "y": 700,
  "wires": [
    []
  ],
  "_order": 446
}

module.exports = Node;