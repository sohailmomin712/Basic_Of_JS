
let Movie_Data = [

    {
        name: "Pathaan",
        date: "20 Aug 2023",
        image: "https://i.pinimg.com/736x/61/b6/10/61b6100b8db0ee8026071fe586c248ae.jpg" ,  
        rating: 8.5
    },
    {
        name: "Jawan",
        date: "20 Aug 2023",
        image: "https://m.media-amazon.com/images/M/MV5BMmMyNzY3MWYtYjk3OC00YTBkLTgyMTgtNTcwMWMyNWNkYzAzXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg" ,  
        rating: 8.5
    },
    {
        name: "Spiderman 3",
        date: "20 Aug 2023",
        image: "https://lh3.googleusercontent.com/8Ki9G75B_ZTpMFgzYjZLJjwuZpK4exdjJJFPSqBIFnW92BYI6HNW2PsuXpU9yJ90-Fxw76MkdYsMG0jkMP4Qo6_emJWTdXO-jVA0=w600" ,  
        rating: 120.5
    },
    {
        name: "Captain Amerika",
        date: "20 Aug 2023",
        image: "https://d9nvuahg4xykp.cloudfront.net/1622258910670965038/2292185886543565782.jpg" ,  
        rating: 150.5
    },
    {
        name: "Spiderman X",
        date: "20 Aug 2023",
        image: "https://wegotthiscovered.com/wp-content/uploads/2020/09/sinister-six-poster.jpg" ,  
        rating: 120.5
    },
    {
        name: "Dr.Strange 6",
        date: "20 Aug 2023",
        image: "https://assetscdn1.paytm.com/images/cinema/Doctor-Strange--In-The-Multiverse-Of-Madness-r-705x750-36f0e140-b752-11ec-a762-319bdb0970f2.jpg",  
        rating: 3.5
    },
    {
        name: "Loki",
        date: "20 Aug 2023",
        image: "https://i0.wp.com/www.moviewallpapers.me/wp-content/uploads/2021/04/Loki_2021_High-resolution_Poster_1687x2500.jpg?fit=1687%2C2500&ssl=1" ,  
        rating: 450.5
    },
    {
        name: "RRR",
        date: "20 Aug 2023",
        image: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" ,  
        rating: 9.5
    },
    {
        name: "Pushpa",
        date: "20 Aug 2023",
        image: "https://cdn.bollywoodmdb.com/movies/largethumb/2021/pushpa/pushpa-poster-2.jpg" ,  
        rating: 3.5
    },
   
]





localStorage.setItem("movie", JSON.stringify(Movie_Data));

displayData(Movie_Data)

function displayData(Movie_Data){

    
 document.querySelector("#movies").innerHTML = "" ;

 Movie_Data.map(function(el){
  
    let div = document.createElement("div"); 

    let image = document.createElement("img");
    image.setAttribute("src", el.image)
     
    let name = document.createElement("h1");
    name.innerText = el.name; 
    
    let date = document.createElement("h3");
    date.innerText = el.date; 

    let rating = document.createElement("p");
    rating.innerText = el.rating; 

    let watch = document.createElement("button");
    watch.innerText = "Book Now"
    watch.addEventListener("click", function(){})

    div.append(image,name,date,rating,watch);

    document.querySelector("#movies").append(div);
 
})

}


function sort_High(){
    Movie_Data.sort(function(a,b){
        return +b.rating - +a.rating;
    });
    displayData(Movie_Data)
}



function sort_Low(){
    Movie_Data.sort(function(a,b){
        return +a.rating - +b.rating;
    });
    displayData(Movie_Data)
}



let arrOFimage =
["https://cdn.wallpapersafari.com/76/85/fFsbXB.jpg",
"https://i.ytimg.com/vi/prjKfIu04J4/maxresdefault.jpg",
"https://blogger.googleusercontent.com/img/a/AVvXsEjFTORfUhY-G3vWyVRM9FQRGW7-qRaDdx286cYpbDbbQZnIiMu8OypLSduAyZ-ReOqILrSGDeaRsSa_iaO3-60TRIXrMCW1eRX4dVKb-ya62SY3Sol77broJCcG3xj0P_0KxG8SH8UOWgiK0xgTNPksSXKqv3NQjwFnC50Y-6SksEfuB8UWnKIVvI7Ffg",
"https://i.ytimg.com/vi/6KaGBAdLmLc/maxresdefault.jpg",
"https://wallpaperaccess.com/full/645152.jpg",
"https://www.wallpaperup.com/uploads/wallpapers/2013/12/23/202810/143bf11f0fd13fb46e6ceed00f6f4be3.jpg"
]


let id; // taked global id 
let i = 0; // taked this and increamented every set interval



function slideSHOW(){

    let container = document.getElementById("slideshow")
    
//   id value updated 
   id = setInterval(function(){

        if( i == arrOFimage.length ){
            i=0
        }

        console.log(i) // to check its starting from 0 or not after coplete cycle

        let img = document.querySelector("#img")
        img.src = arrOFimage[i]; 
        // data from local storage   arrOFimage[i]

        i++

      
    },1000) // repeat in every 1 sexond 
}

slideSHOW()


let logINarr =  JSON.parse(localStorage.getItem("loginDATA")) 

   if(logINarr == null){
        document.querySelector("#movies").innerHTML = ""
    }else{
      
        
        
        document.querySelector("#RHS").innerHTML = ""
        let RHS =  document.querySelector("#RHS")
        let p = document.createElement("p")
        p.setAttribute("class","aa")
        let a = document.createElement("a")

        logINarr.map(function(el){
        a.innerText = `user - ${el.name}`
         })

        p.append(a)

        let pp = document.createElement("p")
        pp.setAttribute("class","aa")
        let aa = document.createElement("a")

        aa.setAttribute("onclick","logOUT()")
        aa.innerText = "LogOut"
        aa.style.cursor = "pointer"
        aa.addEventListener("click", function(){
            logOUT()
        })
        
        pp.append(aa)
        
        RHS.append(p,pp)

     

   
    }
    



function logOUT(){
   alert("LogOut Successfull")
   window.location.href = "login.html"
   
}
