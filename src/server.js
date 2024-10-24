const Hapi = require("@hapi/hapi");
const booksRoutes = require("./routes/books");

const init = async () => {
  const server = Hapi.server({
    port: process.env.APP_PORT || 9000,
    host: "localhost",
  });

  server.route(booksRoutes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
process.on("unhandleRejection", (err) => {
  console.log(err);
  process.exit(1);
});
init();
