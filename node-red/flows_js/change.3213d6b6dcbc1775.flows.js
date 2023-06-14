const Node = {
  "id": "3213d6b6dcbc1775",
  "type": "change",
  "z": "5ee0ae05e3ad5b5a",
  "name": "add delay + create schedule object \\n with cron expression",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t   /* Split the payload string into an array of time components */\t    $time_string_array := $split(payload, \":\");\t   /* Converts the time string array to a new array of numbers */\t    $time_number_array := $map(\t       $time_string_array,\t       function($value, $index) { $number($value) }\t   );\t   /* Calculates the new value for the minutes component by adding 2 if the seconds count is over 30 and 1 if it is under */\t    $nextrun_minutes := $time_number_array[1] + ($time_number_array[2] > 30 ? 2 : 1);\t    /* Generates the cron syntax */\t    $cron := $nextrun_minutes & \" \" & $time_number_array[0] & \" * * *\"\t   )",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"command\": \"add\",\t    \"name\": config.schedule_name,\t    \"expression\": payload,\t    \"expressionType\": \"cron\",\t    \"payloadType\": \"default\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1200,
  "y": 120,
  "wires": [
    []
  ],
  "_order": 87
}

module.exports = Node;