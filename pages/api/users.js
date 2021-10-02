export default function handler(req, res) {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log("json result => ", json)
      res.status(200).json(json)
    })
}