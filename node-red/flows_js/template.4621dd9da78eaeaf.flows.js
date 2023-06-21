const Node = {
  "id": "4621dd9da78eaeaf",
  "type": "template",
  "z": "b211627962aab2cb",
  "name": "Select now",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 350,
  "y": 1560,
  "wires": [
    []
  ],
  "_order": 279
}

Node.template = `
SELECT NOW()
`

module.exports = Node;