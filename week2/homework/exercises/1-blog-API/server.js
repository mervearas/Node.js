const express = require('express')
const app = express();
const fs = require("fs");
app.use(express.json());

// YOUR CODE GOES IN HERE
app.post('/blogs', (req, res) => {
  if(isInvalid(req)) {
    res.status(400);
    res.send('Invalid request');
    return;
  }

  const title = req.body.title;
  const content = req.body.content;

  fs.writeFileSync(title, content);
  res.end('ok')
})

app.put('/posts/:title', (req, res) => {
  if(isInvalid(req)) {
    res.status(400);
    res.send('Invalid request');
    return;
  }

  const title = req.params.title;
  const content = req.body.content;

  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok')
  }
  else {
    // Send response with error message
    res.status(404);
    res.send('File does not exist!');
  }
})

app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
  if (fs.existsSync(title)) { // Add condition here
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    // Respond with message here
    res.status(404);
    res.send('File does not exist!');
  }
})

app.get('/blogs/:title', (req, res) => {
  const title = req.params.title;
  // How to get the title from the url parameters?
  // check if post exists
  if(fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    res.send(post);
  } else {
    res.status(404);
    res.send('File does not exist!');
  }
})

function isInvalid(req) {
  if(typeof req.body == 'undefined' ||
     typeof req.body.title == 'undefined' ||
     typeof req.body.content == 'undefined') {
       return true
  } else {
    return false
  }
}

app.listen(3000);