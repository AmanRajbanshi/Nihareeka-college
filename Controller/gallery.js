const Gallery = require("../Model/gallery.js");

module.exports.postGallery = async (req, res, next) => {
  const newGallery = new Gallery(req.body);
  try {
    const insertGallery = await newGallery.save();
    res.status(201).json(insertGallery);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};
module.exports.getGallery = async (req, res, next) => {
  try {
    const getGallery = await Gallery.find();
    res.json(getGallery);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.deleteGallery = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteGallery = await Gallery.findByIdAndDelete({ _id });
    res.json(deleteGallery);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
