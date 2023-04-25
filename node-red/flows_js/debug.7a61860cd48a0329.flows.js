const Node = {
  "id": "7a61860cd48a0329",
  "type": "debug",
  "z": "452aaf8dc5cd8d45",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.warningStatus = 0\t? { $flowContext(\"tablename\"): \"table created\" }:\tpayload.warningStatus = 1\t? { $flowContext(\"tablename\"): \"table exists\" }:\t{\"warningstatus\" : payload.warningStatus}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1000,
  "y": 400,
  "wires": [],
  "_order": 204
}

module.exports = Node;