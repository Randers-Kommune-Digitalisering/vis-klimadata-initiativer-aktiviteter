const Node = {
  "id": "9014ce0c1ddf1f70",
  "type": "template",
  "z": "f15ef1d8b0c08ad3",
  "g": "5b468bd526d63108",
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
  "_order": 168
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