// time:hour, min, sec
function getTimeString(time){
const hour=parseInt(time/3600);
let remSecond=time%3600;
const min= parseInt(remSecond/60);
 remSecond= parseInt(remSecond);

return `${hour}h ${min}m ${remSecond}s ago`
}

// 1 fetch , load and show categories on html dinamically
// create load Categories
const loadCategories=() =>{
    // fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data)=>displayCategories(data.categories))
    .catch((error)=>console.log(error))
    
};

// load videos
const loadVideos=() =>{
    // fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res)=> res.json())
    .then((data)=>displayVideos(data.videos))
    .catch((error)=>console.log(error))
    
};
// demo card for design card from daisy apa
// const demoCard={
//     "category_id": "1001",
//     "video_id": "aaad",
//     "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
//     "title": "Smells Like Teen Spirit",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//             "profile_name": "Oliver Harris",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "5.4K",
//         "posted_date": "1672656000"
//     },
//     "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
// }

const displayVideos=(videos)=>{
    const videoContainer=document.getElementById("videos")

    videos.forEach(video=>{
        console.log(video)

        // create video card dynamically
    const card=document.createElement("div")
    card.classList="card card-compact "
    card.innerHTML= `
        <figure class="h-[200px] relative ">
    <img class="h-full w-full object-cover "
      src=${video.thumbnail}      
      />
      ${
        video.others.posted_date.length==0 ? "":`<span class="absolute right-2 bottom-2 bg-black text-white rounded p-1">${ getTimeString(video.others.posted_date)} </span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-4">
    <div >
    <img class="w-10 h-10 rounded-full object-cover " 
    src= ${video.authors[0].profile_picture} />
    </div>
    <div>
    <h2 class="font-bold text-lg ">${video.title} </h2>
    <p>${video.authors[0].profile_name} <span>
    ${
        video.authors[0].verified==true ? `<i class="text-blue-400 font-bold fa-regular fa-circle-check"></i>`: ""
    }
    </span></p>
    <p>${video.others.views} </p>
    </div>
  </div>   
        `;
videoContainer.append(card)
    })

        

}

// create Display categories
const displayCategories=(categories) =>{
    const categoryContainer=document.getElementById("categories")

    categories.forEach((item)=>{
        console.log(item)
        // create a btn
      const button= document.createElement('button')
      button.classList="btn"
      button.innerText=item.category
    // append button to category container
   categoryContainer.append(button)

    })
}


loadCategories();
loadVideos();
