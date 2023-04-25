const Node = {
  "id": "46868fe38cf5a184",
  "type": "change",
  "z": "36a828017042c198",
  "g": "992b69685929fd28",
  "name": "Opsætning af forespørgsel ↓ \\n Totalt antal kvm2 skov og engarealer \\n i Randers Kommune for alle registrerede år",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://api.statbank.dk/v1/data",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "POST",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"table\":\"AREALDK\",\"format\":\"CSV\",\"variables\":[{\"code\":\"OMRÅDE\",\"values\":[\"730\"]},{\"code\":\"ENHED\",\"values\":[\"0120\"]},{\"code\":\"Tid\",\"values\":[\"*\"]},{\"code\":\"ARE1\",\"values\":[\"E\",\"F2\"]}]}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 310,
  "y": 320,
  "wires": [
    [
      "a23d55dbf287fcfa"
    ]
  ],
  "_order": 138
}

module.exports = Node;