const Node = {
  "id": "bfb02ac182e1d95b",
  "type": "debug",
  "z": "aad50484a0b40b44",
  "name": "stdout - Ingen ny data",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    data.tablename: \"no new data\",\t    \"lastDbUpdate\": payload[0].last_observation,\t    \"lastDataObservation\": (data.observedAt ~>$split('.'))[0] ~> $toMillis\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 670,
  "y": 1160,
  "wires": [],
  "_order": 490
}

module.exports = Node;