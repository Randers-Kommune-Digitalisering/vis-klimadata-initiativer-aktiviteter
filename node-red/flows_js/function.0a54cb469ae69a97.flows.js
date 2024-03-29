const Node = {
  "id": "0a54cb469ae69a97",
  "type": "function",
  "z": "9cd2fc26979e7dd1",
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
  "x": 910,
  "y": 920,
  "wires": [
    [
      "413dc87cd10fc40f"
    ]
  ],
  "_order": 510
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs, customParseFormat) {
  
    // Extend with custom parse functionality
    dayjs.extend(customParseFormat); // dayjs/plugin/customParseFormat
    
    // Date(s) to parse
    var data = msg.data;
    
    if (msg.data == null || msg.data.length == 0)
        return msg;
    
    // For each variable in msg.dataskabelon
    for (const [key, value] of Object.entries(msg.data[0]))
    {
        // Check if variable type is date
        if(key == msg.date_column)
        {
            // For each data object
            data.forEach(item =>
            {
                // Parsing ISO date
                var dayjsObj = dayjs(item[key]);
    
                // If valid parse, set date = toDate()
                if (dayjsObj.isValid())
                {
                    item[key] = dayjsObj.format(msg.outputDateFormat);
                }
            });
        }
    }
    return msg;
  
}

module.exports = Node;