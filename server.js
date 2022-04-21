const express = require("express");
const app = express();
require("./connection");

const PORT = process.env.PORT || 4000;

app.use(express.json());

//Routes
const contactRoute = require("./Routes/contact.js");
const eventsRoute = require("./Routes/events.js");
const galleryRoute = require("./Routes/gallery.js");
const newsletterRoute = require("./Routes/newsletter.js");
const noticeRoute = require("./Routes/notice.js");

//Middlewares
app.use("/api/v1", contactRoute);
app.use("/api/v1", eventsRoute);
app.use("/api/v1", galleryRoute);
app.use("/api/v1", newsletterRoute);
app.use("/api/v1", noticeRoute);

app.listen(PORT, () => {
  console.log(`server is started at ${PORT}`);
});
