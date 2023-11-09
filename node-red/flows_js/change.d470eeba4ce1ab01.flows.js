const Node = {
  "id": "d470eeba4ce1ab01",
  "type": "change",
  "z": "4ee111634776501c",
  "name": "counter ++",
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
  "x": 510,
  "y": 260,
  "wires": [
    [
      "2af69c7d1a2ab999"
    ]
  ],
  "_order": 606
}

module.exports = Node;