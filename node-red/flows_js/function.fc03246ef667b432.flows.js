const Node = {
  "id": "fc03246ef667b432",
  "type": "function",
  "z": "db9cae581f57fc84",
  "g": "92d5ed7235f71cf0",
  "name": "Parse to date obj",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "dayjs",
      "module": "dayjs"
    },
    {
      "var": "customParseFormat",
      "module": "dayjs/plugin/customParseFormat"
    }
  ],
  "x": 990,
  "y": 380,
  "wires": [
    [
      "f35ea978691dabeb",
      "22413d13c16b68d5"
    ]
  ],
  "_order": 599
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs, customParseFormat) {
  // Extend with custom parse functionality
  dayjs.extend(customParseFormat); // dayjs/plugin/customParseFormat
  
  // Date(s) to parse
  var data = msg.data;
  
  // Check if value is a date string in the format supplied in msg.validDates
  var validDateFormats = msg.validDateFormats;
  validDateFormats = !Array.isArray(validDateFormats) ? [validDateFormats] : validDateFormats;
  
  // For each item (obj)
  data.forEach(item =>
  {
      // For each key in item
      for (const [key, value] of Object.entries(item)) {
  
          // For each valid date format, check if parsable
          for (var i = 0; i < validDateFormats.length; i++)
          {
              // Strict parsing
              var dayjsObj = dayjs(value, validDateFormats[i], true);
  
              // If valid parse, set date = toDate()
              if (dayjsObj.isValid())
              {
                  item[key] = dayjsObj.toDate().toISOString();
                  break;
              }
          }
      }
  });
      
  return msg;
}

module.exports = Node;