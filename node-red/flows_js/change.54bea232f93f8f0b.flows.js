const Node = {
  "id": "54bea232f93f8f0b",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "68638907faf95219",
  "name": "Flyt data og oversæt  \\n datofelt til iso8601",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> | $ | {\t    \"MÅNED\": $replace($substring($.TID,8),\"M\",\"-\") & \"-01\"\t    \t},  $$.columns_todelete |",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg"
    },
    {
      "t": "delete",
      "p": "columns_todelete",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 1040,
  "wires": [
    [
      "b4de503d63dc6823"
    ]
  ],
  "_order": 143
}

module.exports = Node;