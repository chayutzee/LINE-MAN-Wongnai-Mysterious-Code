const data = "aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K";
const buffer = Buffer.from(data, "base64");
console.log("result: ", buffer.toString("ascii"));
