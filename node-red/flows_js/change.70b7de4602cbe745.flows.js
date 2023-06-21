const Node = {
  "id": "70b7de4602cbe745",
  "type": "change",
  "z": "8b14b3c953574b40",
  "g": "1990698f251b0a12",
  "name": "TABLE NAME",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "opendata_braendstofforbrug",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "dst_BIL54",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "flow",
      "to": "eds_PRODUKTION",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 310,
  "y": 1140,
  "wires": [
    []
  ],
  "_order": 242
}

module.exports = Node;