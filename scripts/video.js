console.log("connected")
// 1 fetch , load and show categories on html dinamically


// create load Categories
const loadCategories=() =>{
    // fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data)=>displayCategories(data.categories))
    .catch((error)=>console.log(error))
    
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
