const Node = {
  "id": "2e39b79d2576f9ba",
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
  "y": 280,
  "wires": [
    []
  ],
  "_order": 246
}

Node.template = `
{
    "op": "inc",
    "val": 1,
    "labels": {
        "dataset": "{{dataset}}",
        "responseUrl": "{{{responseUrl}}}",
        "http-status": {{statusCode}},
        "file-status" : "{{count}} datafiles eligible for pull, because file age is within {{max_file_age_days}} days"
    }
}
`

module.exports = Node;