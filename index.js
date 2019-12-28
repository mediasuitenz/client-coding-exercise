const express = require('express')
const fs = require('fs')
const { getTopWords } = require('./tags')
const app = express()
const rootPostDir = './assets/posts'


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/post/:slug', function (req, res) {
  const contents = fs.readFileSync(`${rootPostDir}/${req.params.slug}.md`, 'utf8')
  const sections = contents.split('===').filter(item => !!item)
  const pairs = sections[0].split('\n').filter(item => !!item)

  res.json({
    title: pairs[0].split(':')[1].trim(),
    author: pairs[1].split(':')[1].trim(),
    content: sections[1],
    tags: getTopWords(sections[1])
  })
})

app.get('/posts', function (req, res) {
  const files = fs.readdirSync(rootPostDir, 'utf8')
  const posts = files.map(fileName => {
    const contents = fs.readFileSync(`${rootPostDir}/${fileName}`, 'utf8')
    const sections = contents.split('===').filter(item => !!item)
    const pairs = sections[0].split('\n').filter(item => !!item)

    return {
      title: pairs[0].split(':')[1].trim(),
      author: pairs[1].split(':')[1].trim(),
      slug: pairs[2].split(':')[1].trim(),
      tags: getTopWords(sections[1])
    }
  })
  res.json(posts)
})
 
app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
})