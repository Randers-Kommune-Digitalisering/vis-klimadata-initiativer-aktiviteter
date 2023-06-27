const Node = {
  "id": "beaf489b55ef27df",
  "type": "template",
  "z": "db9cae581f57fc84",
  "name": "Forespørgsel ↓\\n Slet eksisterende tabel ved deploy",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 680,
  "y": 2380,
  "wires": [
    [
      "6fa1a22720727561"
    ]
  ],
  "_order": 364
}

Node.template = `
IF EXISTS ( SELECT
            *
            FROM sys.tables
            WHERE SCHEMA_NAME(schema_id)
            LIKE '{{flow.tablename}}'
          )
DROP TABLE {{flow.tablename}}
`

module.exports = Node;