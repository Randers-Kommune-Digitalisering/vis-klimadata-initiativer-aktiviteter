const Node = {
  "id": "4057cf82e6442f23",
  "type": "debug",
  "z": "7f3219f0beb025c3",
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
  "_order": 126
}

module.exports = Node;