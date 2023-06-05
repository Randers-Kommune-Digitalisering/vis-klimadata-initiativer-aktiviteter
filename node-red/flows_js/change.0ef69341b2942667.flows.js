const Node = {
  "id": "0ef69341b2942667",
  "type": "change",
  "z": "452aaf8dc5cd8d45",
  "g": "aedcfef7c781f318",
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
  "x": 990,
  "y": 200,
  "wires": [
    [
      "080d51ddc857aa0f"
    ]
  ],
  "_order": 325
}

module.exports = Node;