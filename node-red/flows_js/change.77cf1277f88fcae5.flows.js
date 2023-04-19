const Node = {
  "id": "77cf1277f88fcae5",
  "type": "change",
  "z": "63aa29a6222f244d",
  "name": "Testdata",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "payload.data",
      "pt": "msg",
      "to": "{\"ogc_fid\":2224,\"projektomr\":\"Lavbunds s. for Fårup\",\"status\":\"ngp_potentielle\",\"vandloebsnavn\":\"Skals Å\",\"aarstal\":2023,\"areal_klima_ha\":\"167,468614\"}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 280,
  "y": 60,
  "wires": [
    [
      "461f6dcc1f237332"
    ]
  ],
  "_order": 201
}

module.exports = Node;