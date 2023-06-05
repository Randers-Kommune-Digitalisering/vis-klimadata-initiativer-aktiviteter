const Node = {
  "id": "bbcb5f39dd352e01",
  "type": "change",
  "z": "36a828017042c198",
  "g": "992b69685929fd28",
  "name": "Oprydning i uaktuelle parametre",
  "rules": [
    {
      "t": "delete",
      "p": "headers",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "cronplus",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 910,
  "y": 320,
  "wires": [
    [
      "02c42f1bea2e8afc"
    ]
  ],
  "_order": 202
}

module.exports = Node;