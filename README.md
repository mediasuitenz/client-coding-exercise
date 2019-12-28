# Front-end coding exercise

This repo contains an Express application that exposes two end-points:

**GET /posts**

Returns an array of article summaries in the format of:
```
[
  {
    title: <article title>,
    author: <author name>,
    slug: <article slug>,
    tags: [<array>, <of>, <common>, <words>]
  },
  ...
]
```

**GET /post/<slug>**

Returns a single record as a JSON object in the format:
```
{
  title: <article title>,
  author: <author name>,
  content: <markdown content of the article>,
  tags: [<array>, <of>, <common>, <words>]
}
```

## Launching the API
Pre-requisits: Node, npm

The API can be launched by:
1. Clone this repo: 
```
$> git clone git@github.com:mediasuitenz/client-coding-exercise.git
```
2. Move into the directory and install the dependencies:
```
$ cd client-coding-exercise
$ npm i
```
3. Launch the application:
```
$ node index.js
```

