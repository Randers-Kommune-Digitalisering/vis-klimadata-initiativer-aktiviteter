const Node = {
  "id": "e3e640d4700783e9",
  "type": "change",
  "z": "5ee0ae05e3ad5b5a",
  "name": "Get timestamp",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$millis()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 860,
  "y": 80,
  "wires": [
    [
      "6c9fbdb6055a96a8"
    ]
  ],
  "_order": 122
}

module.exports = Node;