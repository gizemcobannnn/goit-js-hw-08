console.log("homework 8")
const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];


createListElement(images);

  function createListElement(images){

    for (const image of images) {
      const { preview, original, description } = image;


    const galleryUL = document.querySelector("ul.gallery");
    const createdA = document.createElement("a");
    createdA.classList.add("gallery-link");
    createdA.setAttribute("onclick","return false");
    createdA.href = original;

    const createdImg = document.createElement("img");
    createdImg.classList.add("gallery-image");
    createdImg.src= preview;
    createdImg.dataset.source= original;
    createdImg.alt = description;

    createdA.appendChild(createdImg);

    const createdLi = document.createElement("li");
    createdLi.classList.add("gallery-item");

    createdLi.appendChild(createdA);
    galleryUL.appendChild(createdLi);

    }
  }

  const gallery = document.querySelector("ul.gallery");
  gallery.addEventListener("click",(event)=>{
    console.log(event.target);
  });


 document.addEventListener("keydown",(event)=>{
  event.preventDefault();
  if(event.key === "Escape" || event.key === "Esc"  || event.keyCode === 27){
    console.log("esc is pressed")
  }
 });


 const imagesDom = document.querySelectorAll('.gallery-image');

 imagesDom.forEach(image => {
    image.addEventListener('click', (event) => {
        const instance = basicLightbox.create(`
            <img src="${event.target.src.replace('__480', '_1280')}" alt="${event.target.alt}">
        `);

        instance.show();
    });
});