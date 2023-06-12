const Node = {
  "id": "b8d7627cf8ee590c",
  "type": "change",
  "z": "db9cae581f57fc84",
  "g": "bf3a5d37f980d010",
  "name": "Concenate data",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "/* This expression concatenates all the arrays from the input object together into one array. */\t$reduce(\t   /* Use the $reduce function to iterate over the elements contained in the input array */\t    data,\t   /* The input data to process */\t    function($accumulator, $value) {\t       /* The function to apply to each element */\t        $append($accumulator, $value) /* Concatenate the current element ($value) to the accumulator ($accumulator) */\t    },\t   [] /* The initial value of the accumulator. The accumulator is used to accumulate the result of the function applied to each element. */\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1480,
  "y": 360,
  "wires": [
    [
      "024aa1d2d61e06e8"
    ]
  ],
  "_order": 255
}

module.exports = Node;