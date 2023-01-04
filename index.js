import { ethers } from "./ethers-5.6.esm.min.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")

connectButton.onclick = connect
fundButton.onclick = fund

console.log(ethers)

async function connect(){
    if(typeof window.ethereum !== "undefined"){
        try{
            await window.ethereum.request({method: "eth_requestAccounts"})
        } catch (error){
            console.log(error)
        }
        connectButton.innerHTML = "Connected!"
    }else{
        fundButton.innerHTML = "Please install Metamask!"
    }
}

async function fund(ethAmount){
    console.log(`Funding with ${ethAmount}...`)
    if(typeof window.ethereum !== "undefined"){
        // provider / connection to the blockchain
        // signer / wallet / someone with some gas
        // contract that we are interacting 
        // ^ABI & Address
    }

}