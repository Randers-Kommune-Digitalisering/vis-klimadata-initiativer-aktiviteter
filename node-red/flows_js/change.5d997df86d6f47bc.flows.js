const Node = {
  "id": "5d997df86d6f47bc",
  "type": "change",
  "z": "752a5429c81af8a5",
  "name": "Extract table name",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "payload.table",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 700,
  "wires": [
    []
  ],
  "_order": 688
}

module.exports = Node;