const Node = {
  "id": "54bea232f93f8f0b",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "68638907faf95219",
  "name": "Rens og oversæt datofelt \\n til iso8601",
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
      "p": "data.TID",
      "pt": "msg"
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
  "x": 810,
  "y": 480,
  "wires": [
    [
      "ee650a883692de95"
    ]
  ],
  "_order": 96
}

module.exports = Node;