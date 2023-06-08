const Node = {
  "id": "fec70e0007a251fd",
  "type": "function",
  "z": "452aaf8dc5cd8d45",
  "name": "function 1",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "dayjs",
      "module": "dayjs"
    }
  ],
  "x": 1760,
  "y": 400,
  "wires": [
    [
      "c76ad0c8a9130824"
    ]
  ],
  "_order": 456
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs) {
  // Date to parse (string)
  var value = msg.value;
  
  // Check if value is a date string in the format supplied in msg.validDates
  var validDateFormats = msg.validDateFormats;
  validDateFormats = !Array.isArray(validDateFormats) ? [validDateFormats] : validDateFormats;
  
  // Var to hold date obj
  var dateObj;
  
  // Check if parsable
  for (var i = 0; i < validDateFormats.length; i++)
  {
      var dayjsObj = dayjs(value, validDateFormats[i], true);
  
      msg.daysObj = dayjsObj;
      msg.isValid = dayjsObj.isValid();
      
      if (dayjsObj.isValid())
      {
          dateObj = dayjsObj.toDate();
          break;
      }
  }
  
  // Return parsed dateObj
  msg.dateObj = dateObj;
  return msg;
}

module.exports = Node;