const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HrQnWGkjYjtYTYrMLFp1Ax4b67HoPribt0LWKZSc5XFTn0JsPNrVW0v944580qkIYx6G1kpWToSnHscfWRihfN600dqZSuvUP"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hellow world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
