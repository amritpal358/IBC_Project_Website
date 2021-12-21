//const Web3 =require('web3');
const web3= new Web3("https://rinkeby.infura.io/v3/424eda375d2848a48d900a1e4b25217b");
const Private_key ="e8621bdccf086c240c12195e16e97cdbc232ee6022c3280efaccd3501b822192";
const from="0x6CCDc032708464633b969d8f3A9bEfc9b061180C";

const to_add="0x482D242e569ed8ca9Ef41C3774BD148B61706f82";

async function eth_transaction(){
    var value =web3.utils.toWei('1','ether')
    var st = await web3.eth.accounts.signTransaction({
        to: to_add,
        value: value,
        gas :200000
    },Private_key);
    web3.eth.sendSignedTransaction(st.rawTransaction).then((receipt)=>{
        console.log(receipt);
        console.log("Contract Deployed at :",receipt.contractAddress);
    });
}
eth_transaction()