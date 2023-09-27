const Node = {
  "id": "1d9a861181e03065",
  "type": "debug",
  "z": "aad50484a0b40b44",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload ~> $count() > 0 ?\t{\t    $flowContext(\"metadata_tablename\"): \"metadata exists for sensor\",\t    \"sensorUid\": data.id,\t    \"lastObservation\": payload[0].last_observation\t}\t:\t{\t    $flowContext(\"metadata_tablename\"): \"metadata created for sensor\",\t    \"sensorUid\": data.id\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 880,
  "y": 720,
  "wires": [],
  "_order": 502
}

module.exports = Node;