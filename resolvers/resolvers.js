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
      date: new Date(args.imageInput.date)
    });

    try {
      const result = await image.save();
      console.log(result);
      return { ...result._doc, _id: image._id };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  // removeImage: async id => {
  //   return Image.findByIdAndDelete(id).then(() => Image.find());
  //   // console.log(Image.findByIdAndDelete({ _id: id }));
  // }
};
