const Node = {
  "id": "39c17219c55f4d25",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "name": "Skab dataskabelon",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "validDateFormats",
      "pt": "msg",
      "to": "[\"DD.MM.YYYY\",\"DD-MM-YYYY\",\"DD/MM-YYYY\",\"YYYY.MM.DD\",\"YYYY-MM-DD\"]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 310,
  "y": 1420,
  "wires": [
    []
  ],
  "_order": 453
}

module.exports = Node;