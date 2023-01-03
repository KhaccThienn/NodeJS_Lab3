const express = require("express");
const { request } = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

let products = [
  {
    id: 1,
    name: "Sp 1",
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-anime-1.jpg",
    price: 18,
  },
  {
    id: 2,
    name: "Sp 2",
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-anime-1.jpg",
    price: 18,
  },
  {
    id: 3,
    name: "Sp 3",
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-anime-1.jpg",
    price: 18,
  },
  {
    id: 4,
    name: "Sp 4",
    image:
      "https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-anime-1.jpg",
    price: 18,
  },
];

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/product", (req, res) => {
  res.render("product", { products });
});

app.get("/product/:id", (request, res) => {
  var id = request.params.id;
  products.forEach((items, index) => {
    if (items.id == id) {
      var product = items;
      res.render("detail", { product });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
