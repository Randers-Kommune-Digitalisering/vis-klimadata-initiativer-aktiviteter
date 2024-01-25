const Node = {
  "id": "201f05cda863c92c",
  "type": "change",
  "z": "c0f39fa937e7d6f9",
  "name": "Table name",
  "rules": [
    {
      "t": "set",
      "p": "dataset",
      "pt": "msg",
      "to": "\"opendata_\"&msg.dataset",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1030,
  "y": 1080,
  "wires": [
    []
  ],
  "_order": 584
}

module.exports = Node;