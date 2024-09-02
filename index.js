
// JSON
let music = [
    {
        id:'id-4',
        name:'Shake Shake',
        artist:"I SHOW MEAT",
        img : './images/speed.jpg',
        genre : 'pop',
        source : './songs/2951.mp3'
    },
    {
        id:'id-5',
        name:'Carry Minati ',
        artist:"Carry Minati",
        img : './images/arijit.jpg',
        genre : 'sufi',
        source : './songs/gerua.mp3'
    },
    {
        id: 'id-8',
        name: 'WU Shang CLan',
        artist: 'karun',
        img: './images/maharani.jpg',
        genre: 'rock',
        source :'./songs/maharani.mp3'
    },

    {
        id: 'id-12',
        name: 'Carry Minati',
        artist: 'Carry Minati',
        img: './images/arijit.jpg',
        genre: 'soft',
        source : './songs/bsb.mp3'
    }

];

let playlists = [
];


let isDarkMode = false;
let currMusic;
let index=0;
let myPlaylist = [];






// toggle button at the navbar
function toggleNavbarButton(){
    let isToggled = false;
    let icon = document.querySelector('#toggle-icon');

    // body is used to change the background color whenever toggled
    let body = document.querySelector('.body-element');

    function toggleTheme(){
        if(isToggled){
            icon.classList.remove('fa-toggle-on');
            icon.classList.add('fa-toggle-off');
            body.classList.remove('makeBlack');
            body.classList.add('makeWhite');
            icon.style.color = 'red';
            changesInLightMode();
            isDarkMode = false;
        }
        else{
            icon.classList.remove('fa-toggle-off');
            icon.classList.add('fa-toggle-on');
            body.classList.remove('makeWhite');
            body.classList.add('makeBlack');
            icon.style.color = 'rgb(92 255 11)';
            changesInDarkMode();
            isDarkMode = true;
        }
        isToggled = !isToggled;
    }

    icon.addEventListener('click',toggleTheme);
}


//  search your music on the basis of music name or music artist name
function searchMusic(){
    let searchValue = document.querySelector('#search-music-input');
    searchValue.addEventListener('keypress',(e)=>{
        if(e.key==='Enter' && searchValue.value.length>2){
            searchSongs(searchValue.value);
            searchValue.value = '';
        }
    })
}




function showSongs(){

    let choose_genre = document.querySelector('#dropdown');
    showSongsHelper(choose_genre.value);
    choose_genre.addEventListener('change',()=>{
        showSongsHelper(choose_genre.value);
        if(isDarkMode){
            changesInDarkMode();
        }
        else{
            changesInLightMode();
        }
    })
    
}



function showSongsHelper(selectedGenre) {
    let songsList = document.querySelector('.all-songs-list');
     songsList.innerHTML = ''; 

    music.forEach((currMusic) => {
        if (selectedGenre === 'all' || selectedGenre==null || currMusic.genre === selectedGenre) {
            createLiButton(currMusic.name, currMusic.genre);
        }
    });
}


function searchSongs(selectedName) {
    let songsList = document.querySelector('.all-songs-list');
     songsList.innerHTML = ''; 

    music.forEach((currMusic) => {
        if (currMusic.name === selectedName.toLowerCase() || currMusic.artist===selectedName) {
            createLiButton(currMusic.name, currMusic.genre);
        }
    });

    if(isDarkMode){
        changesInDarkMode();
    }
    else{
        changesInLightMode();
    }
}





// Changes when dark mode applied
function changesInDarkMode(){
    // change the music heading to white
    let music_heading  = document.querySelector('heading');
    music_heading.style.color = 'white';


    // change background of music section : LHS RHS MID
    let music_section = document.querySelectorAll('.music-section-normalMode');
    music_section.forEach((e)=>{
        e.style.backgroundColor = 'rgb(92 255 11)';
    })
    
    // Filter heading (label , Select , options)
    let filter_heading = document.querySelector('.filter-heading');
    filter_heading.style.color = 'black';

    // heading Above all the songs
    let heading_all_songs  = document.querySelector('.heading-all-songs');
    heading_all_songs.style.color = 'black';

    let musicButton = document.querySelectorAll('.btn-music');
    musicButton.forEach(
        (e)=>{
            e.classList.remove('all-songs-music-normal-mode');
            e.classList.add('all-songs-music-dark-mode');
        }
    )


    let input_create_playlist = document.querySelector('.createPlaylist_heading');
    input_create_playlist.style.backgroundColor = 'black';


    // #all-playlist-heading,#my-created-playlist-heading
    let all_playList_heading = document.querySelector('#all-playlist-heading');
    all_playList_heading.style.color = 'black';

    let my_playList_heading = document.querySelector('#my-created-playlist-heading');
    my_playList_heading.style.color = 'black';


    // #music-name,#artist-Name
    let music_name = document.querySelector('#music-name');
    music_name.style.color = 'yellow';
    let artist_name = document.querySelector('#artist-Name');
    artist_name.style.color = 'green';

    
    // change music buttons
    let music_change_button = document.querySelectorAll('.music-change-button');
    music_change_button.forEach(
        (c)=>{
            c.style.color = 'yellow';
            c.style.border = 'yellow';
        }
    );

    let add_music_to_playlist = document.querySelector('#music-add-to-playlist'); 
    add_music_to_playlist.style.borderColor = 'white';
    add_music_to_playlist.style.color = 'yellow';

    document.querySelector('.mid-music-player').style.backgroundColor = 'black';
}

// changes when Light mode applied
function changesInLightMode(){
    let music_heading  = document.querySelector('heading');
    music_heading.style.color = 'black';

    // change the music section background colour :LHS RHS MID
    let music_section = document.querySelectorAll('.music-section-normalMode');
    music_section.forEach((e)=>{
        e.style.backgroundColor = 'rgb(21, 17, 88)';
    });

    // Filter heading (label , Select , options)
    let filter_heading = document.querySelector('.filter-heading');
    filter_heading.style.color = 'white';

    // heading Above all the songs
    let heading_all_songs  = document.querySelector('.heading-all-songs');
    heading_all_songs.style.color = 'white';

    // change music button in list of music
    let musicButton = document.querySelectorAll('.btn-music');
    musicButton.forEach(
        (e)=>{
            e.classList.remove('all-songs-music-dark-mode');
            e.classList.add('all-songs-music-normal-mode');
        }
    )
    
    // input field of create playlist
    let input_create_playlist = document.querySelector('.createPlaylist_heading');
    input_create_playlist.style.backgroundColor = 'white';

    // #all-playlist-heading,#my-created-playlist-heading
    let all_playList_heading = document.querySelector('#all-playlist-heading');
    all_playList_heading.style.color = 'white';

    let my_playList_heading = document.querySelector('#my-created-playlist-heading');
    my_playList_heading.style.color = 'white';

        // #music-name,#artist-Name
    let music_name = document.querySelector('#music-name');
    music_name.style.color = 'white';
    let artist_name = document.querySelector('#artist-Name');
    artist_name.style.color = 'white';

    let music_change_button = document.querySelectorAll('.music-change-button');
    music_change_button.forEach(
        (c)=>{
            c.style.color = 'white';
            c.style.border = 'white'
        }
    )


    // add music to playlist button
    let add_music_to_playlist = document.querySelector('#music-add-to-playlist'); 
    add_music_to_playlist.style.borderColor = 'yellow';
    add_music_to_playlist.style.color = 'white';

}


// create a LI of Button
function createLiButton(name,value){
    let list_songs = document.querySelector('.all-songs-list');
    let list_item = document.createElement('li');
    let newButton_music = document.createElement('button');
    newButton_music.className = 'all-songs-music-normal-mode';
    newButton_music.classList.add('btn-music');
    newButton_music.id = 'button';
    newButton_music.classList.add('playmusic');
    newButton_music.textContent = name;
    newButton_music.value = value;

    list_item.name = String(name);

    list_songs.append(list_item);
    list_item.appendChild(newButton_music);



    newButton_music.addEventListener('click',(e)=>{
        // play new song
        playMusic(e.target.textContent);

    })
}


// play music, change image, change text
function playMusic(songName){
    let findMusic =  music.find(
        (curr)=>{
            return curr.name===songName;
        }
    )

    if(findMusic!=undefined)
    {
        document.querySelector('#music-add-to-playlist').style.display = 'block';
        document.querySelector('icons').style.display = 'block';
        document.querySelector('.image_section_image').style.display = 'block';
        let prevImages = document.querySelectorAll('.prev-image');
        prevImages.forEach((e)=>{
            e.style.display = 'none';
        })

        document.querySelector('.mid-music-player').style.overflow = 'hidden';

        let audio_source  =  document.querySelector('audio');
        audio_source.style.display = 'block';
        audio_source.src = findMusic.source;
        audio_source.play();

        // update the details
        let music_name = document.querySelector('#music-name');
        let artist_name = document.querySelector('#artist-Name');

        music_name.textContent = findMusic.name.toUpperCase();
        artist_name.textContent = findMusic.artist.toUpperCase();

        // update image
        let img = document.querySelector('.image_section_image');
        img.src = findMusic.img;

        this.currMusic = findMusic;
    }
}



function createPlaylist(){
    let input = document.querySelector('#input-create-playlist');
    let create_playlist_button = document.querySelector('#create-playlist-button');

    // either press enter to add new playlist
    input.addEventListener('keypress',(e)=>{
        if(e.key==='Enter'){
            if(input.value.length>=2){
                let searchIndex = myPlaylist.findIndex(
                    (ele)=>{
                        return ele.name===input.value;
                    }
                )
                if(searchIndex==-1){
                    addToPlaylistHelper(input.value);
                }
            }
            else{
                alert('The length of Playlist name should be minimum of 2');
            }
        }
    });

    // or click on create playlist button to add new playlist
    create_playlist_button.addEventListener('click',()=>{
        if(input.value.length>=2){
            let searchIndex = myPlaylist.findIndex(
                (ele)=>{
                    return ele.name===input.value;
                }
            )
            if(searchIndex==-1){
                addToPlaylistHelper(input.value);
            }
        }
        else{
            alert('The length of Playlist name should be minimum of 2');
        }
    })


    function addToPlaylistHelper(playlistName)
    {
        let list = document.querySelector('.my-playlist-ul');
        let list_item = document.createElement('li');
        let newButton = document.createElement('button');
        newButton.textContent = playlistName;
        newButton.classList.add('all-songs-music-normal-mode');
        newButton.classList.add('btn-music');
        list_item.appendChild(newButton);
        list.appendChild(list_item);

        if(isDarkMode){
            changesInDarkMode();
        }
        else{
            changesInLightMode();
        }

        let newObj = {
            name:playlistName,
        }

        // myPlaylist.push(newObj);
        myPlaylist.push(newObj);
        

        input.value = '';

        //  delete playlist music
        let deleteElement = document.createElement('p');
             deleteElement.innerHTML = `<i class="fas fa-trash-alt"></i>`;
             deleteElement.classList.add('delete-music-playlist-icon');
             list_item.appendChild(deleteElement);
 
             deleteElement.addEventListener('click',()=>{
                 console.log(playlists);
                 list_item.remove();
                 let getIndex = playlists.indexOf(curr);
                 if(getIndex!=-1){
                     playlists.splice(getIndex,1);
                 }
                 return;
             });
    }
}


// displays all playlist from playlist JSON
function showAllPlaylist(playlist){
    let list = document.querySelector('.all-playlist-ul');
    list.innerHTML = '';
    playlist.forEach(
        (curr)=>{
            let list_item = document.createElement('li');
            let newButton = document.createElement('button');
            newButton.textContent = curr.name;
            newButton.classList.add('all-songs-music-normal-mode');
            newButton.classList.add('btn-music');

            list_item.appendChild(newButton);
            list.appendChild(list_item);

             // delete playlist music
             let deleteElement = document.createElement('p');
             deleteElement.innerHTML = `<i class="fas fa-trash-alt"></i>`;
             deleteElement.classList.add('delete-music-playlist-icon');
             list_item.appendChild(deleteElement);
 
             deleteElement.addEventListener('click',()=>{
                 list_item.remove();
                 let getIndex = playlists.indexOf(curr);
                 if(getIndex!=-1){
                     playlists.splice(getIndex,1);
                 }
                 return;
             });


            newButton.addEventListener('click',()=>{
                playMusic(newButton.textContent);
            });

            newButton.addEventListener('dblclick',()=>{
                newButton.remove();
            });

            if(isDarkMode){
                changesInDarkMode();
            }
            else{
                changesInLightMode();
            }
        }
    )
};


function addMusicToPlaylist(){
    let add_playlist_button = document.querySelector('#music-add-to-playlist');
    add_playlist_button.addEventListener('click',()=>{
        let musicChoosen = this.currMusic;
        
        let allToPlaylist__object = {
            id:musicChoosen.id,
            name:musicChoosen.name,
            artist:musicChoosen.artist,
            img:musicChoosen.img,
            genre:musicChoosen.genre,
            source:musicChoosen.source
        };

        if(isDarkMode){
            changesInDarkMode();
        }
        else{
            changesInLightMode();
        }

        let checkExists = playlists.findIndex(
            (curr)=>{
                return curr.name===allToPlaylist__object.name;
            }
        )

        if(checkExists===-1){
            playlists.push(allToPlaylist__object);
            showAllPlaylist(playlists);
        }
        else{
            alert(allToPlaylist__object.name+' is already in the playlist');
        }
    })
}


function changeMusic(){
    let next_button = document.querySelector('#nextIcon');
    next_button.addEventListener('click',()=>{
        let current_music = document.querySelector('audio');
        current_music = "./"+current_music.src.substring(22);

        console.log(current_music);

        // find in array the index
        let index = music.findIndex(
            (curr)=>{
                return curr.source===current_music;
            }
        );

        console.log("Index "+index);

        if(index+1==music.length){
            index=0;
        }
        else{
            index+=1;
        }

        
        let nextSong = music[index];
        playMusic(nextSong.name);

    });

    let prev_button = document.querySelector('#previousIcon');
    prev_button.addEventListener('click',()=>{
        let current_music = document.querySelector('audio');
        current_music = "./"+current_music.src.substring(22);

        // find in array the index
        let index = music.findIndex(
            (curr)=>{
                return curr.source===current_music;
            }
        );

        if(index-1==-1){
            index=music.length-1;
        }
        else{
            index-=1;
        }
        
        let previousSong = music[index];
        playMusic(previousSong.name);
    })
}



function searchPlaylist(){
    if(isDarkMode){
        changesInDarkMode();
    }
    else{
        changesInLightMode();
    }
    let submit_btn = document.querySelector('#search-playlist');
    let input = document.querySelector('#input-create-playlist');
    searchPlaylistMy(submit_btn,input,playlists);
}



function searchPlaylistMy(submit_btn,input,myPlaylist){

    submit_btn.addEventListener('click',()=>{
    
    if(input.value.length<2){
            alert('Input should have a minimum of 2 size');
            return false;
    }

    let search = myPlaylist.findIndex(
            (element)=>{
                return element.name===input.value;
            }
        );
    
    let showPlace = document.querySelector('.show-search-result');
    showPlace.innerHTML = '';

    if(search!=-1){
        let newElement = document.createElement('button');
        let curr_mus = myPlaylist[search];
        // newElement.textContent = "Name :"+ curr_mus.name+" Artist : "+curr_mus.artist;
        newElement.innerHTML = `
            Name: ${curr_mus.name} <br>
            Artist: ${curr_mus.artist} <br>
            Genre: ${curr_mus.genre} <br>
        `
        newElement.classList.add('btn-music-search-playlist');
        showPlace.appendChild(newElement);
    }
    else{
        showPlace.innerHTML = input.value+' not found in playlist';
    }
    });
}


function displayPrevImage(){
    let prev_image_container = document.querySelector('.display-prev-image');
    music.forEach(
        (curr)=>{
            let newElement  = document.createElement('img');
            newElement.src = curr.img;
            newElement.alt = 'loading';
            newElement.classList.add('prev-image');
            prev_image_container.appendChild(newElement);

            newElement.addEventListener('click',()=>{
                playMusic(curr.name);
            })

        }
    )
}


displayPrevImage();
showAllPlaylist(playlists);
createPlaylist();
searchMusic();
showSongs();
toggleNavbarButton();
addMusicToPlaylist();
changeMusic();
searchPlaylist();




