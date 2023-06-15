const Node = {
  "id": "54bea232f93f8f0b",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "68638907faf95219",
  "name": "Flyt data og oversæt  \\n datofelt til iso8601",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "data.maaned",
      "pt": "msg",
      "to": "$map(data.TID, function($v, $i, $a) {    $replace($substring($v,8),\"M\",\"-\") & \"-01\" })",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 520,
  "wires": [
    [
      "b4de503d63dc6823"
    ]
  ],
  "_order": 144
}

module.exports = Node;