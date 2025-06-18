# Independence Calculator

## Description
This is a project created as an addition to website [rookgaard.live](https://rookgaard.live/).
It was highly requested by the community and since I had no idea what I want to create I decided to solve real problems and built this project.

To make sure it works correctly use it together with IndependenceScraper (Backend). 
Entire webpage is supposed to be mobile friendly. You can change the language at the top-right corner.

## Tools used
- React
- Chakra-ui
- Vite
- TypeScript
- i18next
- React Query
- Axios
- Quill

## Running locally
There are no any envs required.
Run ```yarn install``` or ```npm install``` to install all dependencies.
Then run ```yarn start``` or ```npm run start``` to start the development server.
If you are running backend locally as well make sure to change axios base url (src/lib/api/axios.ts) to match your backend.

## Features
Features can be split into three categories:
- Progress Monitor
- Wiki
- Calculators

### Progress Monitor
Progress Monitor is a tool that allows to track progress of players.
It shows how much experience players got yesterday / today / last week / last month. Based on this information it estimates time it takes for them to reach certain levels in the future.
Data is saved to MongoDB and updated every 2 hours by cronjob.
The data is scrapped from [highscores](https://rookgaard.live/highscores.php) every 2 hours. Proxy is used to avoid being blocked by cloudflare.

### Wiki
Wiki describes various aspects of gameplay.
This is often a go to place for new players or players who want to learn more about the game.
Some of the articles were created by community members.
If certain page was created with the help of someone, he is listed at the bottom right of the page.

Each page contains Suggest Changes button, which allows players to suggest changes to the page. After filling up the form they can send the email that will contain their nickname, category which they selected and description of the change. In case of deprecated information the community will be responsible for keeping information up to date.

### Calculators
Calculators are tools that help players calculate various aspects of the game.
- Stamina Calculator - Helps estimate when stamina will be regenerated. [Source](https://tibia.fandom.com/wiki/Stamina)
- Experience Calculator - Helps estimate how much experience you are missing to specific level and how much of entire amount you have. [Source](https://tibia.fandom.com/wiki/Experience_Formula)
- Basic Calculator - Helps how many hits you require for skill advancement, how much time it will take and what percentage of entire amount you have.
- Fist Calculator - Similar to basic, but it includes attack speed changes of fist fighting. Each level above 10 gives +0.04s attack speed, therefore it requires different formula to calculate.
- Magic Calculator - Used to calculate how much mana you need to reach specific magic level and how much time it will take you, as well as amount of mana potions needed.
- Capacity Calculator - Used to calculate how much capacity you will have at specific level.
- Fishing Calculator - Used to calculate how much time it will take you to reach specific fishing level. And how many fishes you need to catch to reach that level, as well as percentage of entire amount you have.
- Attack Value Calculator - Used to calculate how much attack value you will have at specific skill level and weapon damage. [Source](https://tibia.fandom.com/wiki/Formulae#Attack_Value)
- Speed Breakpoints Calculator - Used to calculate character speed and how much is missing towards the next breakpoint. [Source](https://docs.google.com/spreadsheets/d/1SvoaTOPe-j76in5neX5eiD4Udz0dpcOFkg4gvm-pPXU)
- Death Penalty Calculator - Used to calculate how much experience you will lose when you die at specific level. [Source](https://tibia.fandom.com/wiki/Death)

## Potential Improvements
1. Either add react-router or tanstack-start to make navigation between pages more user-friendly and make it possible to send specific URL instead of entire road of clicks like wiki -> mechanics -> charms.

2. Implement better error handling - currently if incorrect information is submitted by the user nothing will happen. Since users are quite aware about what data they should submit it is low priority to implement, but still this could be added for better UX.