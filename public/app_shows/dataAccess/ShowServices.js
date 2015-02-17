showApp.factory('ShowsService',function(){

    var shows = [
        {
            id:10,
            name:'The Interview',
            description:'Dave Skylark and producer Aaron Rapoport run the celebrity tabloid show "Skylark Tonight." When they land an interview with a surprise fan, North Korean dictator Kim Jong-un, they are recruited by the CIA to turn their trip to Pyongyang into an assassination mission.',
            imgUrl: 'http://ia.media-imdb.com/images/M/MV5BMTQzMTcwMzgyMV5BMl5BanBnXkFtZTgwMzAyMzQ2MzE@._V1_SX214_AL_.jpg',
            cast: 'James Franco, Seth Rogen, Randall Park',
            runtime: '112 mins.',
            rating: 'R'
        },

        {
            id:11,
            name:'Into the Woods',
            description:'A witch tasks a childless baker and his wife with procuring magical items from classic fairy tales to reverse the curse put on their family tree.',
            imgUrl:'http://ia.media-imdb.com/images/M/MV5BMTY4MzQ4OTY3NF5BMl5BanBnXkFtZTgwNjM5MDI3MjE@._V1_SX214_AL_.jpg',
            cast: 'Anna Kendrick, Meryl Streep, Chris Pine',
            runtime: '125 mins.',
            rating: 'PG'
        },

        {
            id:12,
            name:'The Hobbit: The Battle of the Five Armies',
            description:'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.',
            imgUrl:'http://ia.media-imdb.com/images/M/MV5BODAzMDgxMDc1MF5BMl5BanBnXkFtZTgwMTI0OTAzMjE@._V1_SX214_AL_.jpg',
            cast: 'Ian McKellen, Martin Freeman, Richard Armitage',
            runtime: '144 mins.',
            rating: 'PG-13'
        },

        {
            id:13,
            name:'Unbroken',
            description:'After a near-fatal plane crash in WWII, Olympian Louis Zamperini spends a harrowing 47 days in a raft with two fellow crewmen before he\'s caught by the Japanese navy and sent to a prisoner-of-war camp.',
            imgUrl:'http://ia.media-imdb.com/images/M/MV5BMTY3ODg2OTgyOF5BMl5BanBnXkFtZTgwODk1OTAwMzE@._V1_SX214_AL_.jpg',
            cast: 'Jack O\'Connell, Takamasa Ishihara, Domhnall Gleeson',
            runtime: '137 mins.',
            rating: 'PG-13'
        },

        {
            id:14,
            name:'Guardians of the Galaxy',
            description:'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
            imgUrl:'http://ia.media-imdb.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX214_AL_.jpg',
            cast: 'Chris Pratt, Vin Diesel, Bradley Cooper',
            runtime: '121 mins.',
            rating: 'PG-13'
        }

];


    return {
        list: function(){
            return shows;
        },
        findBy: function(id){
            return _.find(shows, function(show){return show.id == id});
        }
    }
});