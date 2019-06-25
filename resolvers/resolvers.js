const Image = require('../models/image');

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

  removeImage: async ({_id})=> {
    return new Promise((resolve, reject) => {
      Image.findByIdAndDelete(_id).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  }
};
