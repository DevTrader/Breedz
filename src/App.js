import React, { Component } from 'react';
import logo from './logo.svg';
import DogGrid from './Components/dogGrid';
import NavHeader from './Components/Nav';
import LandingPage from './Components/LandingPage';
import ImageDisplay from './Components/ImageDisplay';
import Favorites from './Components/Favorites';
import './App.css';


class App extends Component {
  //IMPORTANT:
  //For performance purposes I'm simulating a database with the code I fetched from https://dog.ceo/api/ by setting the state to the ready fetched data,
  //the commented out lines 19 to 64 are the logic used to fetch a picture of each breed (and they should be located on the server, feeding a ready-to-use state for img rendering).
  //This logic would normally be on the server side to load the page faster without having to wait for the fetches to happen.
  constructor(props) {
    super(props)
    this.state = {
      dogBreeds: ["affenpinscher", "african", "airedale", "akita", "appenzeller", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "bulldog", "bullterrier", "cairn", "chihuahua", "chow", "clumber", "collie", "coonhound", "corgi", "dachshund", "dane", "deerhound", "dhole", "dingo", "doberman", "elkhound", "entlebucher", "eskimo", "germanshepherd", "greyhound", "groenendael", "hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "mastiff", "mexicanhairless", "mix", "mountain", "newfoundland", "otterhound", "papillon", "pekinese", "pembroke", "pinscher", "pointer", "pomeranian", "poodle", "pug", "pyrenees", "redbone", "retriever", "ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "schnauzer", "setter", "sheepdog", "shiba", "shihtzu", "spaniel", "springer", "stbernard", "terrier", "vizsla", "weimaraner", "whippet", "wolfhound"],
      breedPictures: ["https://images.dog.ceo/breeds/african/n02116738_10024.jpg","https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg","https://images.dog.ceo/breeds/appenzeller/n02107908_1030.jpg","https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg","https://images.dog.ceo/breeds/basenji/n02110806_1013.jpg","https://images.dog.ceo/breeds/airedale/n02096051_1017.jpg","https://images.dog.ceo/breeds/bluetick/n02088632_101.jpg","https://images.dog.ceo/breeds/borzoi/n02090622_10281.jpg","https://images.dog.ceo/breeds/brabancon/n02112706_1041.jpg","https://images.dog.ceo/breeds/boxer/n02108089_1.jpg","https://images.dog.ceo/breeds/beagle/n02088364_10108.jpg","https://images.dog.ceo/breeds/bouvier/n02106382_1000.jpg","https://images.dog.ceo/breeds/chihuahua/n02085620_10074.jpg","https://images.dog.ceo/breeds/briard/n02105251_12.jpg","https://images.dog.ceo/breeds/cairn/n02096177_1000.jpg","https://images.dog.ceo/breeds/chow/n02112137_1005.jpg","https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_10078.jpg","https://images.dog.ceo/breeds/bulldog-boston/n02096585_10380.jpg","https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10077.jpg","https://images.dog.ceo/breeds/clumber/n02101556_1018.jpg","https://images.dog.ceo/breeds/coonhound/n02089078_1021.jpg","https://images.dog.ceo/breeds/dane-great/n02109047_1005.jpg","https://images.dog.ceo/breeds/dachshund/Dachshund_rabbit.jpg","https://images.dog.ceo/breeds/deerhound-scottish/n02092002_10060.jpg","https://images.dog.ceo/breeds/dhole/n02115913_1010.jpg","https://images.dog.ceo/breeds/collie-border/n02106166_1031.jpg","https://images.dog.ceo/breeds/dingo/n02115641_10021.jpg","https://images.dog.ceo/breeds/doberman/n02107142_10009.jpg","https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_1110.jpg","https://images.dog.ceo/breeds/entlebucher/n02108000_1011.jpg","https://images.dog.ceo/breeds/eskimo/n02109961_10021.jpg","https://images.dog.ceo/breeds/germanshepherd/n02106662_10122.jpg","https://images.dog.ceo/breeds/greyhound-italian/n02091032_10079.jpg","https://images.dog.ceo/breeds/groenendael/n02105056_1018.jpg","https://images.dog.ceo/breeds/husky/n02110185_10047.jpg","https://images.dog.ceo/breeds/keeshond/n02112350_10023.jpg","https://images.dog.ceo/breeds/kelpie/n02105412_1031.jpg","https://images.dog.ceo/breeds/komondor/n02105505_1018.jpg","https://images.dog.ceo/breeds/kuvasz/n02104029_1075.jpg","https://images.dog.ceo/breeds/labrador/n02099712_1150.jpg","https://images.dog.ceo/breeds/leonberg/n02111129_1.jpg","https://images.dog.ceo/breeds/lhasa/n02098413_10144.jpg","https://images.dog.ceo/breeds/malinois/n02105162_10076.jpg","https://images.dog.ceo/breeds/malamute/n02110063_10025.jpg","https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg","https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg","https://images.dog.ceo/breeds/mexicanhairless/n02113978_1006.jpg","https://images.dog.ceo/breeds/mix/Polo.jpg","https://images.dog.ceo/breeds/newfoundland/n02111277_1008.jpg","https://images.dog.ceo/breeds/mastiff-bull/n02108422_1013.jpg","https://images.dog.ceo/breeds/otterhound/n02091635_1043.jpg","https://images.dog.ceo/breeds/papillon/n02086910_10147.jpg","https://images.dog.ceo/breeds/mountain-bernese/n02107683_1003.jpg","https://images.dog.ceo/breeds/pekinese/n02086079_10059.jpg","https://images.dog.ceo/breeds/pembroke/n02113023_10636.jpg","https://images.dog.ceo/breeds/pinscher-miniature/n02107312_105.jpg","https://images.dog.ceo/breeds/pomeranian/n02112018_10129.jpg","https://images.dog.ceo/breeds/pointer-german/n02100236_1054.jpg","https://images.dog.ceo/breeds/pug/n02110958_10.jpg","https://images.dog.ceo/breeds/pyrenees/n02111500_1031.jpg","https://images.dog.ceo/breeds/redbone/n02090379_1006.jpg","https://images.dog.ceo/breeds/poodle-miniature/n02113712_1036.jpg","https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_10014.jpg","https://images.dog.ceo/breeds/rottweiler/n02106550_10048.jpg","https://images.dog.ceo/breeds/saluki/n02091831_10215.jpg","https://images.dog.ceo/breeds/schipperke/n02104365_10071.jpg","https://images.dog.ceo/breeds/samoyed/n02111889_1.jpg","https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1024.jpg","https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1032.jpg","https://images.dog.ceo/breeds/shiba/shiba-1.jpg","https://images.dog.ceo/breeds/setter-english/n02100735_10030.jpg","https://images.dog.ceo/breeds/shihtzu/n02086240_1011.jpg","https://images.dog.ceo/breeds/sheepdog-english/n02105641_10048.jpg","https://images.dog.ceo/breeds/springer-english/n02102040_1055.jpg","https://images.dog.ceo/breeds/stbernard/n02109525_10032.jpg","https://images.dog.ceo/breeds/vizsla/n02100583_10249.jpg","https://images.dog.ceo/breeds/weimaraner/n02092339_1013.jpg","https://images.dog.ceo/breeds/whippet/n02091134_10107.jpg","https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg","https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1002.jpg","https://images.dog.ceo/breeds/terrier-american/n02093428_10164.jpg"],
      favorites: [3,2,1,4],
      displayIMG: '',
      displayIndex: ''
    }
  }


  //init dog breeds/breed pictures to fetch from API
  
  //fetch breeds to dynamically add to image fetch URL, one per breed
  // fetchBreeds = () => {
  //   fetch(`https://dog.ceo/api/breeds/list/all`)
  //   .then((resp) => resp.json())
  //   .then(data => {
  //     console.log(data)
  //     let dogBreedArr = [];
  //     //get dog breeds from data OBJ
  //     for(let breed in data.message){
  //       dogBreedArr.push(breed);
  //     }
  //     //update state with dogbreeds
  //     this.setState({dogBreeds: dogBreedArr});
  //     console.log('Dog breeds', this.state.dogBreeds)
  //     //fetch pictures callback
  //     //this.fetchDogPicture()
  //   });
  // }

  //fetch dog picture for each breed
  // fetchDogPicture = () => {
  //   let dogPicturesArr = [];
  //   console.log('trigger');
  //   this.state.dogBreeds.forEach((breed) => {
      
  //       fetch(`http://dog.ceo/api/breed/${breed}/images`)
  //       .then((resp) => resp.json())
  //       .then(data => {
  //         dogPicturesArr.push(data.message[0]);
  //         //console.log(dogPicturesArr.length)
  //       }).then(() => {
  //           console.log(JSON.stringify(dogPicturesArr))
  //       });
      
  //   })

    //Populate pictures
    //this.setState({breedPictures: dogPicturesArr});
  //}
  

  //Map breedPictures and render components
  componentWillMount () {
    //this.fetchDogPicture()
    //-----Init Animation
    setTimeout( function(){
      document.getElementsByClassName('firstHalf')[0].setAttribute("id", "away-left");
      document.getElementsByClassName('secondHalf')[0].setAttribute("id", "away-right");
      document.getElementsByClassName('content')[0].setAttribute("id", "opacity");
      document.getElementsByClassName('blackBG')[0].setAttribute("id", "opacity");
    }, 500);

    //Allow scroll after animation, set display to none
    setTimeout( function(){
      document.body.style.overflowY = "scroll";
      document.getElementsByClassName('firstHalf')[0].style.display = 'none';
      document.getElementsByClassName('secondHalf')[0].style.display = 'none';
      document.getElementsByClassName('content')[0].style.display = 'none';
      document.getElementsByClassName('blackBG')[0].style.display = 'none';
    }, 1500)
  }

  selectPicHandler = (e) => {
    let imgsrc = e.target.dataset.imgurl; //imgSRC
    let imgIndex = e.target.dataset.index;
    this.setState({
      displayIMG: imgsrc,
      displayIndex: imgIndex
    });
    document.getElementsByClassName('ImageDisplay')[0].style.display = 'initial';
    console.log(this.state);
  }

  closeSelectPicHandler = () => {
    document.getElementsByClassName('ImageDisplay')[0].style.display = 'none';
  }

  favoriteHandler = (e) => {
    let faves = [...this.state.favorites];
    faves.push(this.state.displayIndex);
    this.setState({favorites: [...faves]});
    console.log(this.state.favorites);
  }

  openFaveMenu = () => {
    document.getElementsByClassName('Favorites')[0].style.display = 'initial';
  }

  closeFaveMenu = () => {
    document.getElementsByClassName('Favorites')[0].style.display = 'none';
  }
  

  //Render images inside styled components to fit tableView requirement
  render() {
    const renderDogs = this.state.breedPictures.map((imgURL, index) => {
      return <DogGrid dogPics= {imgURL} key = {index} index = {index} selectPic = {this.selectPicHandler}/>
    });

    return (
      <div className="App">
      {/* profile info */}
        <LandingPage />
        <NavHeader openFave = {this.openFaveMenu}/>
        <ImageDisplay imgSRC = {this.state.displayIMG} close={this.closeSelectPicHandler} fave={this.favoriteHandler}/>
        <Favorites faves = {this.state.favorites} closeFave={this.closeFaveMenu} imgArr = {this.state.breedPictures}/>
        <div className = 'containerGrid'>
          {renderDogs}
        </div>
      </div>
    );
  }
}

export default App;
