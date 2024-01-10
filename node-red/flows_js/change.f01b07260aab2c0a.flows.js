const Node = {
  "id": "f01b07260aab2c0a",
  "type": "change",
  "z": "39591030e2e9860e",
  "g": "cdba575c8249e3b4",
  "name": "increase counter",
  "rules": [
    {
      "t": "set",
      "p": "counter",
      "pt": "msg",
      "to": "$$.counter+1",
      "tot": "jsonata",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 460,
  "wires": [
    [
      "3ab74e82abed99a7"
    ]
  ],
  "_order": 619
}

module.exports = Node;