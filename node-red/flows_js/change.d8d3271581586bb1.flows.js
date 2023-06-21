const Node = {
  "id": "d8d3271581586bb1",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "cfbcffc3f4a1cd56",
  "name": "Opsæt primary keys",
  "rules": [
    {
      "t": "set",
      "p": "primary_keys",
      "pt": "msg",
      "to": "primary_keys ~> $join(\",\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "primary_keys",
      "pt": "msg",
      "to": "\"(\" & primary_keys & \")\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "primary_keys",
      "pt": "msg",
      "to": "{ \"name\": \"PRIMARY KEY\", \"type\": primary_keys }",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "_flatlist",
      "pt": "msg",
      "to": "flatlist ~> $append(primary_keys)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 920,
  "y": 1260,
  "wires": [
    [
      "d2ae71a2cc455b60"
    ]
  ],
  "_order": 177
}

module.exports = Node;