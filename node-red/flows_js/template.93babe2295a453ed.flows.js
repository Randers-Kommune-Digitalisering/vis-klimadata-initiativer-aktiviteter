const Node = {
  "id": "93babe2295a453ed",
  "type": "template",
  "z": "067b777cae534d43",
  "g": "1c0465d32fb3747a",
  "name": "build metrics",
  "field": "payload.metrics",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 1090,
  "y": 320,
  "wires": [
    [
      "d49be72dd9cfb99a"
    ]
  ],
  "_order": 172
}

Node.template = `
{
    "op": "inc",
    "val": 1,
    "labels": {
        "dataset": "{{dataset}}",
        "responseUrl": "{{{responseUrl}}}",
        "http-status": {{statusCode}},
        "file-status" : "{{count}} datafiles excluded from pull, beacuse file age exceeds {{max_file_age_days}} days"
    }
}
`

module.exports = Node;