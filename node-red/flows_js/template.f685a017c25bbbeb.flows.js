const Node = {
  "id": "f685a017c25bbbeb",
  "type": "template",
  "z": "7b004c5e11e87f28",
  "g": "bc26321d5a43933d",
  "name": "build metrics",
  "field": "payload.metrics",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 1010,
  "y": 320,
  "wires": [
    []
  ],
  "_order": 102
}

Node.template = `
{
    "op": "inc",
    "val": 1,
    "labels": {
        "dataset": "{{dataset}}",
        "responseUrl": "{{{responseUrl}}}",
        "http-status": {{statusCode}},
        "file-status" : "{{count}} datafiles excluded from pull, file age exceeds {{max_file_age_days}} days"
    }
}
`

module.exports = Node;