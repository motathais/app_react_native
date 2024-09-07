import Produto from "@/app/Models/Produto";
import axios from "axios";
import { PreventRemoveContext } from "@react-navigation/native";
import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import React from "react";
 
 
 
const CadastroProduto = ()=>{
    let [nome,setNome] = useState('');
    let [descricao,setDescricao] = useState('');
    let [preco, setPreco] = useState(0);
//Continua Aqui
    return(
        <View>
            <Text   >Nome:</Text>
            <TextInput onChangeText={setNome} value={nome} />
            <Text   >Descricao:</Text>
            <TextInput onChangeText={setDescricao} value={descricao} />
            <Text   >Preco:</Text>
            <TextInput onChangeText={(v)=> 
            setPreco(isNaN(parseFloat(v))? 0: parseFloat(v))}
                inputMode="numeric" value={preco.toString()}/>
           <Button title="Cadastrar" onPress={Cadastrar}></Button>
        </View>
    );
 
    function Cadastrar(){
        let produto: Produto = {
            nome: nome,
        descricao: descricao,
        preco: preco,
        } as Produto;
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.post(api,produto)
               
    }
}

export default CadastroProduto;