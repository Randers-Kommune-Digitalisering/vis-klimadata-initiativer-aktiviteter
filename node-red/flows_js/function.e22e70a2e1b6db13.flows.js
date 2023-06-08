const Node = {
  "id": "e22e70a2e1b6db13",
  "type": "function",
  "z": "db9cae581f57fc84",
  "name": "dayjs conversion - not tested",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1280,
  "y": 460,
  "wires": [
    []
  ],
  "_order": 598
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const dayjs = global.get('dayjs');
  const customParseFormat = global.get('customParseFormat');
  dayjs.extend(customParseFormat);
  
  const acceptedFormats = msg.acceptedFormats;
  const data = msg.payload;
  
  data.forEach(item => {
      let parsedDate;
      for (const format of acceptedFormats) {
          parsedDate = dayjs(item.date, format);
          if (parsedDate.isValid()) break;
      }
      item.date = parsedDate.toISOString();
  });
  
  msg.payload = data;
  return msg;
}

module.exports = Node;