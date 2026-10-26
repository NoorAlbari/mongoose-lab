const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const Recipe = require('./models/Recipe')
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log('Connected to the databse')
    }
    catch (error) {
        console.log('ERROR', error)

    }

}
connectToDatabase()

async function createRecipe() {


    try {
        const newRecipe = await Recipe.create({
            name: "Um Ali",
            instructions: "bake at 180C",
            prepTime: 120,
            difficulty: "med"

        })

        console.log(newRecipe)
    } catch (error) {
        console.log("Failed to create recipe.")
    }



}


async function createRecipeOne() {


    try {
        const newRecipe = await Recipe.create({
            name: "Um Ali",
            instructions: "bake at 180C",
            prepTime: 120,
            difficulty: "Medium"

        })

        console.log(newRecipe)
    } catch (error) {
        console.log("Failed to create recipe.")
    }



}
//////createRecipe()
//////createRecipeOne()

async function createRecipeMore() {
    const newRecipe = await Recipe.create({
        name: "Pink Pasta",
        instructions: "Mix all the ingredients",
        prepTime: 30,
        difficulty: "Easy"

    })

    console.log(newRecipe)

}

/////createRecipeMore()

async function getAllRecipes() {
    const allRecipes = await Recipe.find()

    console.log(allRecipes)

    ////console.log({name} + 'is an' + {difficulty} + 'recipe and takes' + {prepTime} + 'minutes to prepare')
}

getAllRecipes()


async function getAllRecipes() {
    const allRecipes = await Recipe.find()

    console.log(allRecipes)


}

getAllRecipes()


async function getRecipeById() {
    try {
        const foundRecipeById = await Recipe.findById('6adf45c7eaf640d449508ffe')
        console.log(foundRecipeById)
    } catch (error) {
        console.log("No recipe with this ID exists.")
    }

}

getRecipeById()



async function updateRecipe() {
    try {
        const updateRecipeById = await Recipe.findByIdAndUpdate('6adf45c7eaf640d449508ffe' ,{prepTime: 35},{new:true})
        console.log(updateRecipe)
    } catch (error) {
        console.log("No recipe with this ID exists.")
    }

}

updateRecipe()





async function deleteRecipe() {
    try {
        const deleteRecipeById = await Recipe.findByIdAndDelete('6adf43cd00496a7edbcebfb8')
        console.log("Recipe successfully deleted.")
    } catch (error) {
        console.log("No recipe with this ID exists.")
    }

}

deleteRecipe()

