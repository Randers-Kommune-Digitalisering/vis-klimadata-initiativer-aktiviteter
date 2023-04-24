const Node = {
  "id": "fdc6e109d6714a6c",
  "type": "change",
  "z": "f68edc394a4e5259",
  "name": "Retries ++ \\n Delay +++",
  "rules": [
    {
      "t": "set",
      "p": "retryCount",
      "pt": "msg",
      "to": "retryCount +1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "delay",
      "pt": "msg",
      "to": "retryCount * (2000 + delay)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{   \"text\": \"waiting for\" & delay/1000 & \"seconds\",   \"fill\": \"green\",   \"shape\": \"dot\" }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 120,
  "wires": [
    [
      "node4"
    ]
  ],
  "_order": 113
}

module.exports = Node;