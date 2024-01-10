const Node = {
  "id": "279e3136e64a382b",
  "type": "change",
  "z": "d5880abe3145a384",
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
  "x": 470,
  "y": 400,
  "wires": [
    [
      "8e3b1e26b7438d95"
    ]
  ],
  "_order": 395
}

module.exports = Node;