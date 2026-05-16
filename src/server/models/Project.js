const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {	
	title: String,
	description: String,
	imageUrl: String,
	githubUrl: String,
	technologies: [String],
	featured: {
         type: Boolean,
	 default: true,
	},
    },
    {timestamps: true}
);

module.exports = mongoose.model("Project", projectSchema);
