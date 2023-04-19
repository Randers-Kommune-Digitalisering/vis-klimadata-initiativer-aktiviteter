const Node = {
  "id": "00864b74fec3e5b7",
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
  "x": 1420,
  "y": 120,
  "wires": [],
  "_order": 163
}

module.exports = Node;