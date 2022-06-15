class Song {
    constructor(title, artist){
        this.title = title;
        this.artist = artist;
        this.DB = new Set();
    }
    title (){
        console.log (this.title);
    }
    artist (){
        console.log (this.artist);
    }
    howMany(nameArray){
        let starDBtLength = this.DB.size;
        nameArray.forEach(element => {
            this.DB.add(element.toUpperCase());
        });
        let nowDBtLength = this.DB.size;
        let newCustomers = nowDBtLength - starDBtLength;
        console.log(newCustomers+1);
    }
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

mountMoose.howMany(['John', 'John', 'BOb', 'carl', 'RyAn']);
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']);
mountMoose.howMany(['Jack', 'jacK'])