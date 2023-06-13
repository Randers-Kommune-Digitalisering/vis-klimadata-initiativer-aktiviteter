const Node = {
  "id": "aba913f971e107ac",
  "type": "change",
  "z": "7f3219f0beb025c3",
  "g": "551ed5c8ce0f31c7",
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
  "x": 840,
  "y": 360,
  "wires": [
    []
  ],
  "_order": 170
}

module.exports = Node;