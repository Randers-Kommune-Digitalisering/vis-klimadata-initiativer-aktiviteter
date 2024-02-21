const Node = {
  "id": "4020b80fb44238ba",
  "type": "change",
  "z": "d5880abe3145a384",
  "g": "9567f48068967909",
  "name": "Compose SQL DROP TABLE \\n statement",
  "rules": [
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "/* DROP the table if it exists */ \"DROP TABLE IF EXISTS \" & tablename",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 960,
  "wires": [
    [
      "6593a3734a5b6ee7"
    ]
  ],
  "_order": 424
}

module.exports = Node;