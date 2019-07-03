const Image = require('../models/image');
const favoriteImage = require('../models/favoriteImage');

module.exports = {
  images: async () => {
    try {
      const images = await Image.find();
      return images.map(image => {
        return { ...image._doc, _id: image._id };
      });
    } catch (err) {
      console.log(err);
    }
  },

  addImage: async args => {
    const image = new Image({
      file: args.imageInput.file,
      url: args.imageInput.url,
      date: new Date(args.imageInput.date),
      uniq: args.imageInput.uniq
    });

    try {
      const result = await image.save();
      return { ...result._doc, _id: image._id };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  removeImage: async ({ uniq }) => {
    return new Promise((resolve, reject) => {
      Image.findOneAndDelete({ uniq: uniq }).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },

  favoriteImages: async () => {
    const favorite = await favoriteImage.find();
    try {
      return favorite.map(image => {
        return { ...image._doc, _id: image._id };
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  addFavoriteImage: async args => {
    const favorite = new favoriteImage({
      file: args.imageInput.file,
      url: args.imageInput.url,
      date: new Date(args.imageInput.date),
      uniq: args.imageInput.uniq
    });

    try {
      const result = await favorite.save();
      return { ...result._doc, _id: favorite._id };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
