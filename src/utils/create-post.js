const inquirer = require("inquirer");
const prettier = require("prettier");
const fs = require("fs-extra");
const path = require("path");
const { PathPrompt } = require("inquirer-path");
const chalk = require("chalk");

inquirer.registerPrompt("path", PathPrompt);

function stringify(str) {
	str = str.replace(/^\s+|\s+$/g, ""); // trim
	str = str.toLowerCase();

	// remove accents, swap ñ for n, etc
	var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
	var to = "aaaaeeeeiiiioooouuuunc------";
	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
	}

	str = str
		.replace(/[^a-z0-9 -]/g, "") // remove invalid chars
		.replace(/\s+/g, "-") // collapse whitespace and replace by -
		.replace(/-+/g, "-"); // collapse dashes

	return str;
}

inquirer
	.prompt([
		{
			type: "input",
			message: `What's your blogpost title?`,
			name: "title",
			validate: input => Boolean(input)
		},

		{
			type: "input",
			message: `Write a short (usually 1-2 line) description of your blogpost`,
			name: "desc"
		},
		{
			type: "confirm",
			message: `Does it have a hero image?`,
			name: "hasHero",
			default: true
		},
		{
			type: "path",
			message: `Write the path to the hero image (from static/):`,
			name: "heroSrc",
			cwd: "./static/",
			when: answers => answers.hasHero,
			filter: input => input.replace(path.resolve(__dirname, ".."), "")
		}
	])
	.then(answers => {
		const { title, desc, heroSrc } = answers;
		const slug = stringify(title);
		const currentDate = new Date();
		const currentFormattedDate = currentDate.toISOString().split("T")[0];
		const postsJsonPath = "src/data/writings.json";

		const postsObject = fs.readJsonSync(postsJsonPath);

		postsObject[title] = {
			title,
			slug,
			desc,
			heroSrc,
			date: currentFormattedDate
		};

		const postsJson = JSON.stringify(postsObject);

		const prettifiedJson = prettier.format(postsJson, { parser: "json" });

		fs.writeFileSync(postsJsonPath, prettifiedJson);

		const relativePathToMDX = `pages/writings/${slug}.mdx`;
		const pathToMDX = path.join(__dirname, `../../`, relativePathToMDX);
		fs.createFileSync(pathToMDX);

		console.log(chalk.gray`Making your blogpost...`);
		console.log(
			`Done! Go ahead and edit ${chalk.cyan(
				relativePathToMDX
			)} to complete the post.`
		);
	});
