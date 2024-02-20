const Node = {
  "id": "279e3136e64a382b",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "16cba9e5783d458b",
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
  "x": 420,
  "y": 440,
  "wires": [
    [
      "8e3b1e26b7438d95"
    ]
  ],
  "_order": 412
}

module.exports = Node;