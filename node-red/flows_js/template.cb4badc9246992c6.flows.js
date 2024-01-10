const Node = {
  "id": "cb4badc9246992c6",
  "type": "template",
  "z": "39591030e2e9860e",
  "g": "018131b92877fa90",
  "name": "Create new table",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 470,
  "y": 960,
  "wires": [
    [
      "b4e7d169b5e99fc7"
    ]
  ],
  "_order": 633
}

Node.template = `
CREATE TABLE {{newtable}} (
{{{columns}}}
);
`

module.exports = Node;