const Node = {
  "id": "c6ce43f894e456d7",
  "type": "change",
  "z": "752a5429c81af8a5",
  "g": "4e325ed4084b5f12",
  "name": "Generate INSERT statement",
  "rules": [
    {
      "t": "set",
      "p": "sql",
      "pt": "msg",
      "to": "(\t/* Define a set of helper functions */\t$functions := {\t    /* The 'quote' function checks the type of a value.\t       If it's a number, it converts the value to a string withour adding quotes.\t       If it's not a number, it surrounds the value with single quotes. */\t    \"quote\": function($val) { $type($val) = \"number\" ? $string($val) : \"'\" & $val & \"'\" },\t    /* The 'parenthesize' function surrounds a string with parentheses. */\t    \"parenthesize\": function($str) { \"(\" & $str & \")\" }\t};\t\t/* Process the data */\t$data := {\t    /* Get the keys from the first object in the data, surround each key with backticks, and join them with commas. */\t    \"columns\" : data[0].$keys() ~> $map(function($v) { \"`\" & $v & \"`\" }) ~> $join(\", \"),\t    \t    /* For each object in the data, get the values, process each value with the 'quote' function, \t        and join them with commas. */\t    \"values\" : $map(data, function($val, $key) { \t        $each($val, function($val, $key) { \t            $functions.quote($val)\t        }) ~> $join(\", \") \t    /* Then, surround each group of values with parentheses and join them with commas. */    \t    }) ~> $map($functions.parenthesize) ~> $join(\", \")\t};\t\t/* Generate the SQL statement */\t\"INSERT INTO \" & tablename & \" ( \" & $data.columns & \") VALUES \"  & $data.values\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 1080,
  "wires": [
    [
      "02e57546f0f3badb"
    ]
  ],
  "_order": 714
}

module.exports = Node;