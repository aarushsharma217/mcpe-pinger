import net from 'net';

const SERVER_IP = process.env.SERVER_IP || 'jeesmp.falixsrv.me';
const SERVER_PORT = parseInt(process.env.SERVER_PORT) || 39812;

console.log(`Starting MCPE pinger for ${SERVER_IP}:${SERVER_PORT}`);

setInterval(() => {
  const client = new net.Socket();
  client.connect(SERVER_PORT, SERVER_IP, () => {
    console.log(`[${new Date().toLocaleTimeString()}] Ping sent`);
    client.end();
  });
  client.on('error', (err) => {
    console.error(`[${new Date().toLocaleTimeString()}] Error: ${err.message}`);
  });
}, 30000);
