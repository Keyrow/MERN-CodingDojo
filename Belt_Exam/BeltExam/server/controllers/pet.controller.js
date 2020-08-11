const Pet = require('../models/pet');

module.exports = {
    // Read Methods
    allPets: (req, res) => {
        Pet.find({})
            .then(pets => res.json({ message: "success", results: pets }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    onePet: (req, res) => {
        Pet.findOne({ _id: req.params.id })
            .then(pet => res.json({ message: "success", results: pet }))
            .catch(err => res.json({ message: "errors", results: err }));
    },
    //Create Methods --> app.post
    newPet: (req, res) => {
        Pet.create(req.body)
            .then(pet => res.json({ message: "success", results: pet }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // Update Methods -->app.patch
    editPet: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
            .then(pet => res.json({ message: "success", results: pet }))
            .catch(err => res.json({ message: "error", results: err }))
    },
    // Delete Methods --> app.delete
    deletePet: (req, res) => {
        Pet.findOneAndDelete({ _id: req.params.id })
            .then(pet => res.json({ message: "success", results: pet }))
            .catch(err => res.json({ message: "error", results: err }));
    }
}