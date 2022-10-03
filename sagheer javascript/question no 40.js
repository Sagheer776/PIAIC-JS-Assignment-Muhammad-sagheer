let name1 = "Sagheer"
let track1 = "abc"
let name2 = "grid"
let track2 = "jkl"
let name3 = "Kashan"
let track3 = "xyz"
let i =0
function make_album(name , title){
    album_obj = {
        artistName : name,
        albumTitle: title
    }
    console.log(album_obj)
    i++
}
make_album(name1 , track1)
make_album(name2 , track2)
make_album(name3 , track3)
console.log("Number of Tracks : "+i)
