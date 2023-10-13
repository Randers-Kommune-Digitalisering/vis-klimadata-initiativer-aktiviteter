const Node = {
  "id": "8ecbeaa7475d8118",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "19c2db021d7d414f",
  "name": "Byg kolonnenavne",
  "rules": [
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "columnnames",
      "pt": "msg",
      "to": "$keys($flowContext(\"dataskabelon\"))",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 2840,
  "wires": [
    [
      "2c6891898da04502"
    ]
  ],
  "info": "",
  "_order": 348
}

Node.info = `
# Byg af datatreng og kolonnenavne til INSERT query

### JSONata udtrykket der anvendes på msg.data
Dette JSONata udtryk genererer en kommasepareret streng i 'msg.datastring' indeholdende værdierne i det angivne objekt
og omslutter strengværdierne i anførselstegn.
`

module.exports = Node;