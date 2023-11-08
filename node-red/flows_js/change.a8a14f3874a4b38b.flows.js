const Node = {
  "id": "a8a14f3874a4b38b",
  "type": "change",
  "z": "5ee0ae05e3ad5b5a",
  "name": "",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "cron_payload",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "complete",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 920,
  "y": 260,
  "wires": [
    [
      "2835de477f322eca"
    ]
  ],
  "_order": 175
}

module.exports = Node;