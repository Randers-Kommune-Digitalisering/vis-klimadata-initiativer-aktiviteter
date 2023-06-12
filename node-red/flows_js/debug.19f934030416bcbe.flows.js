const Node = {
  "id": "19f934030416bcbe",
  "type": "debug",
  "z": "8571dcc8e1e9c903",
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
  "_order": 180
}

module.exports = Node;