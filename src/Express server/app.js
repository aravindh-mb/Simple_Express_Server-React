const fetch = require("node-fetch")
let express = require("express")
let app = express()
var cors = require('cors')
const port=3000

app.use(
    cors({
        origin:"*",
    })
)
app.get("/", (req, res) => {
    res.send("hello world from my REST API server");
});
app.get('/file', (req, res) => {
    res.sendFile(__dirname+'/pages/index.html')
})
app.get("/data", (req, res)=>{
    let mydata =[
    //     {
    //     "id": 1,
    //     "name": "Berlin",
    //     "age":20,
    //     "department":"CSE",
    //     "college":"university college of texas",
    //     "username": "aravindh-mb",
    //     "email": "Sincere@april.biz",
    //     "address": {
    //     "street": "Kulas Light",
    //     "suite": "Apt. 556",
    //     "city": "Gwenborough",
    //     "zipcode": "92998-3874",
    //     "geo": {
    //     "lat": "-37.3159",
    //     "lng": "81.1496"
    //     }
    //     },
    //     "phone": "1-770-736-8031 x56442",
    //     "website": "hildegard.org",
    //     "company": {
    //     "name": "Romaguera-Crona",
    //     "catchPhrase": "Multi-layered client-server neural-net",
    //     "bs": "harness real-time e-markets"
    //     }
    //     },
    //     {
    //     "id": 2,
    //     "name": "Ervin Howell",
    //     "username": "Antonette",
    //     "email": "Shanna@melissa.tv",
    //     "address": {
    //     "street": "Victor Plains",
    //     "suite": "Suite 879",
    //     "city": "Wisokyburgh",
    //     "zipcode": "90566-7771",
    //     "geo": {
    //     "lat": "-43.9509",
    //     "lng": "-34.4618"
    //     }
    //     },
    //     "phone": "010-692-6593 x09125",
    //     "website": "anastasia.net",
    //     "company": {
    //     "name": "Deckow-Crist",
    //     "catchPhrase": "Proactive didactic contingency",
    //     "bs": "synergize scalable supply-chains"
    //     }
    //     },
    //     {
    //     "id": 3,
    //     "name": "Clementine Bauch",
    //     "username": "Samantha",
    //     "email": "Nathan@yesenia.net",
    //     "address": {
    //     "street": "Douglas Extension",
    //     "suite": "Suite 847",
    //     "city": "McKenziehaven",
    //     "zipcode": "59590-4157",
    //     "geo": {
    //     "lat": "-68.6102",
    //     "lng": "-47.0653"
    //     }
    //     },
    //     "phone": "1-463-123-4447",
    //     "website": "ramiro.info",
    //     "company": {
    //     "name": "Romaguera-Jacobson",
    //     "catchPhrase": "Face to face bifurcated interface",
    //     "bs": "e-enable strategic applications"
    //     }
    //     },
    //     {
    //     "id": 4,
    //     "name": "Patricia Lebsack",
    //     "username": "Karianne",
    //     "email": "Julianne.OConner@kory.org",
    //     "address": {
    //     "street": "Hoeger Mall",
    //     "suite": "Apt. 692",
    //     "city": "South Elvis",
    //     "zipcode": "53919-4257",
    //     "geo": {
    //     "lat": "29.4572",
    //     "lng": "-164.2990"
    //     }
    //     },
    //     "phone": "493-170-9623 x156",
    //     "website": "kale.biz",
    //     "company": {
    //     "name": "Robel-Corkery",
    //     "catchPhrase": "Multi-tiered zero tolerance productivity",
    //     "bs": "transition cutting-edge web services"
    //     }
    //     },
    //     {
    //     "id": 5,
    //     "name": "Chelsey Dietrich",
    //     "username": "Kamren",
    //     "email": "Lucio_Hettinger@annie.ca",
    //     "address": {
    //     "street": "Skiles Walks",
    //     "suite": "Suite 351",
    //     "city": "Roscoeview",
    //     "zipcode": "33263",
    //     "geo": {
    //     "lat": "-31.8129",
    //     "lng": "62.5342"
    //     }
    //     },
    //     "phone": "(254)954-1289",
    //     "website": "demarco.info",
    //     "company": {
    //     "name": "Keebler LLC",
    //     "catchPhrase": "User-centric fault-tolerant solution",
    //     "bs": "revolutionize end-to-end systems"
    //     }
    //     },
    //     {
    //     "id": 6,
    //     "name": "Mrs. Dennis Schulist",
    //     "username": "Leopoldo_Corkery",
    //     "email": "Karley_Dach@jasper.info",
    //     "address": {
    //     "street": "Norberto Crossing",
    //     "suite": "Apt. 950",
    //     "city": "South Christy",
    //     "zipcode": "23505-1337",
    //     "geo": {
    //     "lat": "-71.4197",
    //     "lng": "71.7478"
    //     }
    //     },
    //     "phone": "1-477-935-8478 x6430",
    //     "website": "ola.org",
    //     "company": {
    //     "name": "Considine-Lockman",
    //     "catchPhrase": "Synchronised bottom-line interface",
    //     "bs": "e-enable innovative applications"
    //     }
    //     },
    //     {
    //     "id": 7,
    //     "name": "Kurtis Weissnat",
    //     "username": "Elwyn.Skiles",
    //     "email": "Telly.Hoeger@billy.biz",
    //     "address": {
    //     "street": "Rex Trail",
    //     "suite": "Suite 280",
    //     "city": "Howemouth",
    //     "zipcode": "58804-1099",
    //     "geo": {
    //     "lat": "24.8918",
    //     "lng": "21.8984"
    //     }
    //     },
    //     "phone": "210.067.6132",
    //     "website": "elvis.io",
    //     "company": {
    //     "name": "Johns Group",
    //     "catchPhrase": "Configurable multimedia task-force",
    //     "bs": "generate enterprise e-tailers"
    //     }
    //     },
    //     {
    //     "id": 8,
    //     "name": "Nicholas Runolfsdottir V",
    //     "username": "Maxime_Nienow",
    //     "email": "Sherwood@rosamond.me",
    //     "address": {
    //     "street": "Ellsworth Summit",
    //     "suite": "Suite 729",
    //     "city": "Aliyaview",
    //     "zipcode": "45169",
    //     "geo": {
    //     "lat": "-14.3990",
    //     "lng": "-120.7677"
    //     }
    //     },
    //     "phone": "586.493.6943 x140",
    //     "website": "jacynthe.com",
    //     "company": {
    //     "name": "Abernathy Group",
    //     "catchPhrase": "Implemented secondary concept",
    //     "bs": "e-enable extensible e-tailers"
    //     }
    //     },
    //     {
    //     "id": 9,
    //     "name": "Glenna Reichert",
    //     "username": "Delphine",
    //     "email": "Chaim_McDermott@dana.io",
    //     "address": {
    //     "street": "Dayna Park",
    //     "suite": "Suite 449",
    //     "city": "Bartholomebury",
    //     "zipcode": "76495-3109",
    //     "geo": {
    //     "lat": "24.6463",
    //     "lng": "-168.8889"
    //     }
    //     },
    //     "phone": "(775)976-6794 x41206",
    //     "website": "conrad.com",
    //     "company": {
    //     "name": "Yost and Sons",
    //     "catchPhrase": "Switchable contextually-based project",
    //     "bs": "aggregate real-time technologies"
    //     }
    //     },
    //     {
    //     "id": 10,
    //     "name": "Clementina DuBuque",
    //     "username": "Moriah.Stanton",
    //     "email": "Rey.Padberg@karina.biz",
    //     "address": {
    //     "street": "Kattie Turnpike",
    //     "suite": "Suite 198",
    //     "city": "Lebsackbury",
    //     "zipcode": "31428-2261",
    //     "geo": {
    //     "lat": "-38.2386",
    //     "lng": "57.2232"
    //     }
    //     },
    //     "phone": "024-648-3804",
    //     "website": "ambrose.net",
    //     "company": {
    //     "name": "Hoeger LLC",
    //     "catchPhrase": "Centralized empowering task-force",
    //     "bs": "target end-to-end models"
    //     }
    //     }
    //     ];



    
       
    //    {
    //        "imdb":"tt0096895",
    //        "Title":"Batman Aravindh",
    //        "Year":"1989",
    //        "Poster":"https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    //    {
    //        "imdb":"tt0468569",
    //        "Title":"The Dark Knight",
    //        "Year":"2008",
    //        "id":"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    //    {
    //        "imdb":"tt2975590",
    //        "Title":"Batman v Superman: Dawn of Justice",
    //        "Year":"2016",
    //        "Poster":"https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    //    {
    //        "imdb":"tt1345836",
    //        "Title":"The Dark Knight Rises",
    //        "Year":"2012",
    //        "Poster":"https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    //    {
    //        "imdb":"tt0372784",
    //        "Title":"Batman Begins",
    //        "Year":"2005",
    //        "Poster":"https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    //    {
    //        "imdb":"tt4116284",
    //        "Title":"The LEGO Batman Movie",
    //        "Year":"2017",
    //        "Poster":"https://ia.media-imdb.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    //    {
    //        "imdb":"tt0112462",
    //        "Title":"Batman Forever",
    //        "Year":"1995",
    //        "Poster":"https://ia.media-imdb.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    //    {
    //        "imdb":"tt0118688",
    //        "Title":"Batman & Robin",
    //        "Year":"1997",
    //        "Poster":"https://ia.media-imdb.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    //    {
    //        "imdb":"tt0103776",
    //        "Title":"Batman Returns",
    //        "Year":"1992",
    //        "Poster":"https://ia.media-imdb.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg"}
     

    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z"
      },
      {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 2.5
      },
      {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Get Out",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 8,
        dailyRentalRate: 3.5
      },
      {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Trip to Italy",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Wedding Crashers",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Gone Girl",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 4.5
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "The Sixth Sense",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 4,
        dailyRentalRate: 3.5
      },
      {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "The Avengers",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 3.5
      }
   ]

        res.json(mydata);
})
console.log(__dirname);
app.listen(port,()=>{
    console.log( `hello buddy your server is listening on ${port} port`)
})