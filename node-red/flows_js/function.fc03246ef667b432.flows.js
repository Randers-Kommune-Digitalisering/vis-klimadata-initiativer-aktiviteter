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
  "x": 630,
  "y": 2680,
  "wires": [
    [
      "43379a8b2078619b"
    ]
  ],
  "_order": 370
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs, customParseFormat) {
  // Extend with custom parse functionality
  dayjs.extend(customParseFormat); // dayjs/plugin/customParseFormat
  
  // Date(s) to parse
  var data = msg.data;
  
  // Check if value is a date string in the format supplied in msg.validDates
  var validDateFormats = msg.validDateFormats;
  validDateFormats = !Array.isArray(validDateFormats) ? [validDateFormats] : validDateFormats;
  
  // For each variable in flow.flatlist
  for (var i = 0; i < flow.get("flatlist").length; i++)
  {
      const obj = flow.get("flatlist")[i];
      
      // Check if variable type is date
      if (obj.type == "DATE")
      {
          // For each data object
          data.forEach(item =>
          {
              // For each valid date format, check if parsable
              for (var i = 0; i < validDateFormats.length; i++)
              {
                  // Strict parsing
                  var dayjsObj = dayjs(item[obj.name], validDateFormats[i], true);
  
                  // If valid parse, set date = toDate()
                  if (dayjsObj.isValid())
                  {
                      item[obj.name] = dayjsObj.format(msg.outputDateFormat);
                      break;
                  }
              }
          });
      }
  
  }
      /*
  
  // For each variable in flow.dataskabelon
  for (const [key, value] of Object.entries(flow.get("dataskabelon")))
  {
      // Check if variable type is date
      if(value == "DATE")
      {
          // For each data object
          data.forEach(item =>
          {
              // For each valid date format, check if parsable
              for (var i = 0; i < validDateFormats.length; i++)
              {
                  // Strict parsing
                  var dayjsObj = dayjs(item[key], validDateFormats[i], true);
  
                  // If valid parse, set date = toDate()
                  if (dayjsObj.isValid())
                  {
                      item[key] = dayjsObj.format(msg.outputDateFormat);
                      break;
                  }
              }
          });
      }
  }
  
  */
  return msg;
}

module.exports = Node;