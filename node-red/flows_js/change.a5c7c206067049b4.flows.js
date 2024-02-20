const Node = {
  "id": "a5c7c206067049b4",
  "type": "change",
  "z": "752a5429c81af8a5",
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
  "x": 460,
  "y": 340,
  "wires": [
    [
      "58ed4fadd3d56588"
    ]
  ],
  "_order": 744
}

module.exports = Node;