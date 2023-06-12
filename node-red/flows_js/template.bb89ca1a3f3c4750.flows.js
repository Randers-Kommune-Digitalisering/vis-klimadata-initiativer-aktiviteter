const Node = {
  "id": "bb89ca1a3f3c4750",
  "type": "template",
  "z": "6b360b454d19172a",
  "g": "ae64c3f2c1c354b3",
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
    []
  ],
  "_order": 267
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