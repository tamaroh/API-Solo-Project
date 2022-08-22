const { setupServer } = require("./server");

const server = setupServer();
const PORT = 4000;
server.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});
