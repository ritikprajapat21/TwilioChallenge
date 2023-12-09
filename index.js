import express from "express";
import "dotenv/config";
import fetch from "node-fetch";

import mail from "@sendgrid/mail";

const app = express();
const PORT = 3000;

mail.setApiKey(process.env.SENDGRID_API_KEY);

const fetchMarsRoverPhoto = async () => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_API_KEY}`
    );
    const data = await response.json();
    if (response.size > 0) {
      const image = data.photos[Math.floor(Math.random() * data.photos.length)];
      return image.img_src;
    } else {
      console.log("No data");
    }
  } catch (error) {
    console.log("Something went wrong try again");
    console.log(error);
  }
};

const sendMail = async () => {
  const msg = {
    to: "ritikprajapati084@gmail.com",
    from: process.env.from_email,
    subject: "A photo of mars taken by NASA",
    text: "Email is sent jsut for fun",
  };

  await fetchMarsRoverPhoto().then((res) => {
    if (res) {
      msg.html = `<img src="${res}" width="100%" height="100%" alt="This is photo of mars taken by NASA" />`;
      mail
        .send(msg)
        .then((res) => console.log(`Email sent: ${res}`))
        .catch((err) => console.log(err));
    } else {
      console.log("No response");
    }
  });
};

sendMail();

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});
