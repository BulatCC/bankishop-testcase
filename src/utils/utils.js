const getPicturesInCart = (pictureData) => {
    const cartData = pictureData.reduce((acc, picture) => {
        picture.inCart && acc.push(picture.id);
        return acc;
    }, []);

    return JSON.stringify(cartData);
}

export { getPicturesInCart };