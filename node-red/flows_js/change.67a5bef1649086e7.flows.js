const Node = {
  "id": "67a5bef1649086e7",
  "type": "change",
  "z": "540d125162a3e331",
  "g": "9feecf2b49446697",
  "name": "Set parts",
  "rules": [
    {
      "t": "set",
      "p": "parts",
      "pt": "msg",
      "to": "{   \t    \"id\": \"datasets\",\t    \"count\": $flowContext(\"count\"),\t    \"index\": $flowContext(\"currentCount\")\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "currentCount",
      "pt": "flow",
      "to": "$flowContext(\"currentCount\") +1",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1080,
  "y": 200,
  "wires": [
    []
  ],
  "_order": 249
}

module.exports = Node;