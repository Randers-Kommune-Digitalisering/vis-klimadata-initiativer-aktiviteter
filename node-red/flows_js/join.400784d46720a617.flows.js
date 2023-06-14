const Node = {
  "id": "400784d46720a617",
  "type": "join",
  "z": "db9cae581f57fc84",
  "d": true,
  "name": "Join datasets",
  "mode": "custom",
  "build": "array",
  "property": "data",
  "propertyType": "msg",
  "key": "topic",
  "joiner": "\\n",
  "joinerType": "str",
  "accumulate": false,
  "timeout": "",
  "count": "",
  "reduceRight": false,
  "reduceExp": "",
  "reduceInit": "",
  "reduceInitType": "",
  "reduceFixup": "",
  "x": 1390,
  "y": 720,
  "wires": [
    [
      "b8d7627cf8ee590c"
    ]
  ],
  "_order": 363
}

module.exports = Node;