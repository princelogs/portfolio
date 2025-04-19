
let lastSentTime = null;

app.post('/send', async (req, res) => {
  const now = Date.now();
  
  // Block sending if already sent in last 30 seconds
  if (lastSentTime && now - lastSentTime < 30 * 1000) {
    return res.status(429).send('Please wait before sending another message.');
  }

  const { name, email, message } = req.body;
  

  const mailOptions = {
    from: email,
    to: 'theprinceraj577@gmail.com',
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error sending email.');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
