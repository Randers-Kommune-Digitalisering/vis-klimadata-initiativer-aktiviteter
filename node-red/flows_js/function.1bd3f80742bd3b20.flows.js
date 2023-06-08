const Node = {
  "id": "1bd3f80742bd3b20",
  "type": "function",
  "z": "db9cae581f57fc84",
  "g": "92d5ed7235f71cf0",
  "name": "dayjs conversion - not tested",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 980,
  "y": 380,
  "wires": [
    []
  ],
  "_order": 590
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