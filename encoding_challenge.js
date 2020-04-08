const net = require('net');
const crypto = require('./crypto_toolbox')

const HOST = 'socket.cryptohack.org';
const PORT = 13377;

const socket = net.createConnection(PORT, HOST, () => {
  // 'connect' listener.
  console.log("connected to server!");
});

socket.on("data", (data) => {
  const obj = JSON.parse(data);

  switch (obj.type) {
    case "base64":
      obj.decoded = crypto.d_base64(obj.encoded)
      socket.write(JSON.stringify(obj));
      break;
    case "hex":
      obj.decoded = crypto.d_hex(obj.encoded)
      socket.write(JSON.stringify(obj));
      break;
    case "rot13":
      obj.decoded = crypto.d_rot13(obj.encoded)
      socket.write(JSON.stringify(obj));
      break;
    case "bigint":
      obj.decoded = crypto.d_bigint(obj.encoded)
      socket.write(JSON.stringify(obj));
      break;
    case "utf-8":
      obj.decoded = crypto.d_utf8_array(obj.encoded)
      socket.write(JSON.stringify(obj));
      break;
  }

  console.log(obj);
});

socket.on("end", () => {
  console.log("disconnected from server");
});
