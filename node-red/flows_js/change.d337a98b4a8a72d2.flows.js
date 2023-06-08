const Node = {
  "id": "d337a98b4a8a72d2",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "name": "Skab dataskabelon",
  "rules": [
    {
      "t": "set",
      "p": "validDateFormats",
      "pt": "msg",
      "to": "[\"DD.MM.YYYY\"]",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "value",
      "pt": "msg",
      "to": "07-21-2021",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1770,
  "y": 340,
  "wires": [
    [
      "fec70e0007a251fd"
    ]
  ],
  "_order": 458
}

module.exports = Node;