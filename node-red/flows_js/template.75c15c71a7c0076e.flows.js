const Node = {
  "id": "75c15c71a7c0076e",
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
  "x": 950,
  "y": 280,
  "wires": [
    []
  ],
  "_order": 105
}

Node.template = `
{
    "op": "inc",
    "val": 1,
    "labels": {
        "dataset": "{{dataset}}",
        "responseUrl": "{{{responseUrl}}}",
        "http-status": {{statusCode}},
        "file-status" : "{{count}} datafiles eligible for pull, file age is within {{max_file_age_days}} days"
    }
}
`

module.exports = Node;