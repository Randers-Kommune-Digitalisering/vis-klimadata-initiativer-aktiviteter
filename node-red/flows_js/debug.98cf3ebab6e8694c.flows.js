const Node = {
  "id": "98cf3ebab6e8694c",
  "type": "debug",
  "z": "aad50484a0b40b44",
  "name": "stdout",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "payload.changedRows = 1 ?\t{\t    $flowContext(\"metadata_tablename\"): \"metadata updated\",\t    \"uid\": data.id,\t    \"observatedAt\": data.observedAt\t}\t:\t{\t    $flowContext(\"metadata_tablename\"): \"error updating metadata\"\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 880,
  "y": 1560,
  "wires": [],
  "_order": 513
}

module.exports = Node;