const express = require('express');
const router = express.Router();

const heroi = [
    {  "id": 1, "nome":"Spider-man" , pontosDePoder: 90  }
]
const vilao = [
    { "id": 1, "nome": "Thanos", pontosDePoder: 100}
]

const createHeroi = async (req,res) =>{
    try{
        heroi.push(req.body)
        res.status(201).json(heroi)
    }catch (error){
        console.error('Erro ao processar a requisição:', error);
        return res.status(400).json({ message: 'O servidor não pode solicitar a sua requisição' });
    }
}



const createVilao = async(req, res) =>{
    try{
        vilao.push(req.body)
        res.status(201).json(vilao)
    }catch(error){
        console.log('erro ao processar requisição',error);
        return res.status(400).json({message: ' o server nao pode solicitar sua requisição'})
        
    }
}

const listHeroi = async(req,res)=>{
    res.json(heroi)
}

const listVilao = async(req, res)=>{
    res.json(vilao)
}

const createBatalha = async(req,res)=>{
    const heroi = req.body.heroi
    const vilao = req.body.vilao

    try{
        if(heroi.pontosDePoder > vilao.pontosDePoder){
            res.json({message: `${heroi.nome} venceu ${vilao.nome}`})
        }else if (heroi.pontosDePoder <vilao.pontosDePoder ){
            res.json({message: `${heroi.nome} venceu ${vilao.nome}`})
        }else{
            res.json({ message: 'A batalha terminou em empate.' });
        }

    }catch(error){
        console.log('erro ao processar requisição',error);
        return res.status(400).json({message: 'o server nao pode solicitar sua requisição'})
    }
}


module.exports = {createHeroi, createVilao, listHeroi, listVilao, createBatalha}