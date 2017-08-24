// Ultra E-mail App


var emailAccount = {
    id: Number,
    emailAddress: String, 
    emailPassword: String,
    accountNickname: String
}

// Radio on the Internet app

var radioStation = {
    id: Number,
    stationCallSign: String,
    stationNickname: String,
    stationPlaylists: [],
    stationGenre: String,
    stationPopularity: Number
}

var radioSong = {
    id: NUmber, 
    songName: String,
    songArtist: String,
    songYear: Number,
    songLength: Number,
    songGenre: String
}

var radioPlayList = {
    id: Number,
    playlistName: String,
    playlistLength: number
}

// Rock Concert App

// This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

var favoriteBands = {
    id: Number,
    bandName: String,
    bandMembers: [],
    bandConcerts: []
}

var concertData = {
    id: Number,
    concertName: String,
    performerName: String,
    concertDates: [],
    recommendedConcert: String,
    concertTicketsAvailable: Boolean,
    concertTicketPrice: Number
}

// Coffee To-Go App

// This app will allow customers to browse a list of coffeeshops nearby, 
// order drinks off of their menu, 
// add those drinks to a shopping cart, 
// and save that cart as a past order once the purchase is complete.

var coffeeShop = {
    id: Number,
    coffeeShopName: String,
    coffeeShopDrinks: [],
    coffeeShopLocation: String, 
    coffeeShopCart: []
}

var coffeeOrder = {
    id: Number, 
    drinksOrdered: [],
    orderTotal: Number
}

var coffeeDrink = {
    id: Number,
    coffeeName: String,
    coffeePrice: Number,
}

var customerData = {
    id: Number,
    customerName: String,
    customerOrders: [],
    customerPaymentMethod: String
}

//  Team Tracker App

// This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

var team = {
    id: Number,
    teamName: String,
    teamWins: Number,
    teamLosses: Number,
    teamGames: [],
    teamPlayers: []
}

var teamGame = {
    id: Number,
    homeTeamName: String,
    visitingTeamName: String,
    finalScore: Number,
    gameDate: Number
}

var player = {
    id: Number,
    playerName: String,
    playerHeight: Number,
    playerWeight: Number,
    playerLifetimeWins: Number,
    playerLifeTimeLosses: Number
}

// Final Thoughts:

// Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

// A. I tried to think what elements I might want to know about a single item. When that item contained multiple similiar elements, I created another item to populate the first array. 
