let main = document.getElementById("main")

let arr = ["https://i.pinimg.com/736x/99/18/21/991821ec7139de2d6aff1d72f6990e1c.jpg",
            "https://i.pinimg.com/736x/ed/a5/53/eda5531538101e2e5e3babbd75f811eb.jpg",
            "https://i.pinimg.com/736x/ef/c9/91/efc991eb7648fbe8b156c42aedb3fd0e.jpg",
            "https://i.pinimg.com/736x/53/b2/9e/53b29ee2ad232ff910b31f577da36d77.jpg",
            "https://i.pinimg.com/736x/38/ec/86/38ec86a8cfda2286e936d53b6dd10f70.jpg",
            "https://www.nicepng.com/png/detail/42-424873_picture-library-cute-cartoon-google-search-pinterest-gravity.png",
            "https://thumbs.dreamstime.com/b/playful-cartoon-cow-clipart-cute-farm-animal-design-children-s-projects-ai-generated-adorable-cartoon-cow-cutout-kids-333408587.jpg",
            "https://png.pngtree.com/png-vector/20240429/ourlarge/pngtree-happy-penguin-cute-cartoon-art-png-image_12341225.png",
            "https://img.freepik.com/premium-vector/cute-cartoon-penguin_159446-379.jpg",
            "https://i.pinimg.com/236x/4d/0c/9d/4d0c9deece33de55ad09dc59d4994b23.jpg"] 
let s =""
for(let i=1; i<=52;i++){
    let r = Math.floor(Math.random()*arr.length)
    s += `<div class="card"><img src="${arr[r]}"></div>`
}
    main.innerHTML = s

    "https://i.pinimg.com/736x/99/18/21/991821ec7139de2d6aff1d72f6990e1c.jpg",
    "https://i.pinimg.com/736x/ed/a5/53/eda5531538101e2e5e3babbd75f811eb.jpg",
    "https://i.pinimg.com/736x/ef/c9/91/efc991eb7648fbe8b156c42aedb3fd0e.jpg",
    "https://i.pinimg.com/736x/53/b2/9e/53b29ee2ad232ff910b31f577da36d77.jpg",
    "https://i.pinimg.com/736x/38/ec/86/38ec86a8cfda2286e936d53b6dd10f70.jpg",
    "https://www.nicepng.com/png/detail/42-424873_picture-library-cute-cartoon-google-search-pinterest-gravity.png",
    "https://thumbs.dreamstime.com/b/playful-cartoon-cow-clipart-cute-farm-animal-design-children-s-projects-ai-generated-adorable-cartoon-cow-cutout-kids-333408587.jpg",
    "https://png.pngtree.com/png-vector/20240429/ourlarge/pngtree-happy-penguin-cute-cartoon-art-png-image_12341225.png",
    "https://img.freepik.com/premium-vector/cute-cartoon-penguin_159446-379.jpg",
    "https://i.pinimg.com/236x/4d/0c/9d/4d0c9deece33de55ad09dc59d4994b23.jpg"