const Node = {
  "id": "5d96150bfa192fe7",
  "type": "debug",
  "z": "8b14b3c953574b40",
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
  "_order": 218
}

module.exports = Node;