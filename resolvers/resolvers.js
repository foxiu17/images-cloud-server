const Image = require('../models/image');

module.exports = {
  images: () => {
    return Image.find()
      .then(images => {
        return images.map(image => {
          return { ...image._doc, _id: image._id };
        });
      })
      .catch(err => {
        console.log(err);
      });
  },

  addImage: async args => {
    const image = new Image({
      file: args.imageInput.file,
      url: args.imageInput.url,
      date: new Date(args.imageInput.date)
    });

    try {
      const result = await image.save();
      console.log(result);
      return { ...result._doc, _id: image._id };
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  }
};
