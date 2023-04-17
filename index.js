const express = require('express');
const Puzzle = require('./src/Puzzle.js');
const Util = require('./src/Util/Util.js');
const app = express();

app.use(express.json())

app.post('/aEstrela', (req, res) => {
    const input = req.body.input.split(",");
    const goal = req.body.goal.split(",");

    const puzzle = new Puzzle(3, input, undefined, goal, 0)

    res.send(puzzle.ast(req.body.algoritmo));
})

app.post('/dfs', (req, res) => {
    const input = req.body.input.split(",");
    const goal = req.body.goal.split(",");

    const puzzle = new Puzzle(3, input, undefined, goal, 0)

    res.send(puzzle.dfs());
})

app.post('/geraPuzzle', (req, res) => {
    let goal = req.body.goal;

    let puzzle = null;

    let util = new Util;

    let embaralhado = util.randomString(goal)
    goal = goal.split(",")

    switch(req.body.busca){
        case "aStar":
            puzzle = new Puzzle(3, embaralhado, undefined, goal, 0)
            puzzle = puzzle.ast(req.body.algoritmo)
            break;
        case "DFS":
            puzzle = new Puzzle(3, embaralhado, undefined, goal, 0)
            puzzle = puzzle.dfs()
            break;
        default: 
            console.log("opção não encontrada")
            break;
    }

    res.send(puzzle);
})

app.post('/embaralhar', (req, res) => {
    let util = new Util;
    res.send(util.randomString(req.body.goal))
})

app.listen(3000, () => {
    console.log('Aplicação rodando em http://localhost:3000');
});