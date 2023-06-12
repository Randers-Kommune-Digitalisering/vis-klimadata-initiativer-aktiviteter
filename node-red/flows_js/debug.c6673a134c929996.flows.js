const Node = {
  "id": "c6673a134c929996",
  "type": "debug",
  "z": "36a828017042c198",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t   \"target-table\" : $flowContext(\"tablename\"),\t   \"endpoint\" : url,\t   \"http-response-code\" : statusCode,\t   \"status\" : \"datapull complete\",\t   \"returned-rows\" : $count(payload)\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1180,
  "y": 440,
  "wires": [],
  "_order": 175
}

module.exports = Node;