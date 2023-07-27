const Node = {
  "id": "00daa7666719f525",
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
  "y": 280,
  "wires": [
    []
  ],
  "_order": 186
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