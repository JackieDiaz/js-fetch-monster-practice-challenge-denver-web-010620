document.addEventListener("DOMContentLoaded", () => {
    console.log("%c DOM Content Loaded and Parsed!", "color: red")


    const monsterURL = "http://localhost:3000/monsters"

    const monsterToFifty = "http://localhost:3000/monsters/?_limit=50"

    fetch(monsterToFifty)
        .then(response => response.json())
        .then(monsterData => handleMonsterdata(monsterData))
       
        function handleMonsterdata(monsterData){
            monsterData.map(monster => {
                const {name, age, description} = monster
                // console.log(monster)
                // console.log(age)

                renderMonsters(name, age, description)
            })
            // console.log(monsterData)
            
        }
        const monsterContainer = document.querySelector("#monster-container")

        function renderMonsters(name, age, description){
            const monsterCard = document.createElement("div")
            const monsterName = document.createElement("p")
            const monsterAge = document.createElement("p")
            const monsterDescription = document.createElement("p")

            monsterName.textContent = name
            monsterAge.textContent = age
            monsterDescription.textContent = description

            // console.log(name)
            monsterCard.append(name, age, description)
            monsterContainer.append(monsterCard)
        }


})
