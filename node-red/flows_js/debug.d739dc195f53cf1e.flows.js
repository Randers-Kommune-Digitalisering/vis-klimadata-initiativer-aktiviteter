const Node = {
  "id": "d739dc195f53cf1e",
  "type": "debug",
  "z": "aad50484a0b40b44",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"os2iot\": \"new incoming API request\",\t    \"iot_deviceCount\": payload ~> $count(),\t    \"iot_deviceList\": payload ~> $map( function($v)\t        {\t            $v.id\t        }) ~> $join,\t    \"timestamp\": $now()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 520,
  "y": 180,
  "wires": [],
  "_order": 499
}

module.exports = Node;