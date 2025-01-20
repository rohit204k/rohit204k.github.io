export const getImageUrl = (path) => {
    // return new URL(`/src/assets/${path}`, window.location.origin).href; //He used import.meta.url
    // console.log(new URL(`${import.meta.env.BASE_URL}assets/${path}`, import.meta.url).href);
    return new URL(`${import.meta.env.BASE_URL}assets/${path}`, import.meta.url).href;
    
};

export const getFile = (fileName) => {
    return `${import.meta.env.BASE_URL}data/${fileName}`;
};
