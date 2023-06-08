const Node = {
  "id": "e473657485e4dbaf",
  "type": "change",
  "z": "14a0d5d3f4f8bbaa",
  "g": "c0ab4cb3eb4c482a",
  "name": "",
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
  "x": 1010,
  "y": 260,
  "wires": [
    [
      "fcb6623472f3f5bd"
    ]
  ],
  "_order": 528
}

module.exports = Node;