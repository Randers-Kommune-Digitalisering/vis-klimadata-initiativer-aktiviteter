const Node = {
  "id": "706a408c5caead72",
  "type": "template",
  "z": "c0f39fa937e7d6f9",
  "name": "Custom DB-query #1",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 620,
  "y": 840,
  "wires": [
    [
      "dc0ff721baae7660"
    ]
  ],
  "_order": 587
}

Node.template = `
SELECT * from {{msg.dataset}} 


`

module.exports = Node;