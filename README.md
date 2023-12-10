## Inspiration
I tackled the GHW's Twilio challenge, where the task was to leverage the SendGrid API to send personalized emails.

## What it does
It sends personalized emails featuring photos of Mars captured by specific NASA rovers, like Curiosity or Perseverance.

## How to run
1. Clone this repo 
2. Create an account on twilio and create a api key [Twilio](https://app.sendgrid.com/settings/api_keys)
3. Paste above api key in .env file with name **SENDGRID_API_KEY** and also write email you used to create sendgrid in **from_email**
4. Also, paste **NASA_API_KEY=DEMO_KEY**
5. Now before running, run **npm i**
6. Run **node index.js** 

## How we built it
I leveraged node-fetch to integrate NASA's API and extract image URLs, subsequently utilizing SendGrid to send emails containing these Martian marvels.

## Challenges we ran into
While tackling this project, I faced two primary challenges:

Unfamiliarity with the SendGrid module: Initially, I struggled to understand its functionality. However, through dedicated research and consultation of the SendGrid documentation, I acquired the necessary knowledge to utilize it effectively.
Unexpected API response: Upon integrating the NASA API, it initially returned an overwhelming 1000 photos. After thorough examination of its documentation, I discovered that this was the default behavior. By applying specific filters, I successfully reduced the response to a manageable 25 photos, allowing me to select and send the desired image to the recipient's email.

## Accomplishments that we're proud of
I'm thrilled to have mastered the integration of NASA's API and SendGrid module! These skills unlock exciting possibilities for future projects. The NASA API grants access to a vast trove of data and imagery directly from space exploration missions, while SendGrid empowers me to leverage robust email functionalities.  I'm eager to explore what I can build next with this powerful combination.

## What we learned
This project allowed me to learn how to use documentation, master the SendGrid module, and successfully integrate APIs. This knowledge will be invaluable as I continue to develop my skills and embark on new projects.

## What's next for Get Mars photo taken by NASA's rover
You can add a front-end interface to select multiple photos and choose the camera you want.
