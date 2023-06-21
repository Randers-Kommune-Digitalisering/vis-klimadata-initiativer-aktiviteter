const Node = {
  "id": "69284dc1e2e54577",
  "type": "debug",
  "z": "9cd2fc26979e7dd1",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningStatus = 0\t? { $flowContext(\"tablename\"): \"table created\" }:\tpayload.warningStatus = 1\t? { $flowContext(\"tablename\"): \"table exists\" }:\t{\"warningstatus\" : payload.warningStatus}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1440,
  "y": 120,
  "wires": [],
  "_order": 254
}

module.exports = Node;