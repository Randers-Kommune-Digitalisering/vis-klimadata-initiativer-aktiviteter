const Node = {
  "id": "c5d4ecc27825ec66",
  "type": "debug",
  "z": "7f3219f0beb025c3",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t   \"target-table\" : $flowContext(\"tablename\"),\t   \"endpoint\" : url,\t   \"http-response-code\" : statusCode,\t   \"status\" : \"datapull complete\",\t   \"returned-rows\" : $count(payload)\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1080,
  "y": 440,
  "wires": [],
  "_order": 94
}

module.exports = Node;