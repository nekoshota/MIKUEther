abi2=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "BoughtAd",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			},
			{
				"name": "text",
				"type": "string"
			},
			{
				"name": "url",
				"type": "string"
			}
		],
		"name": "buyAd",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "fund",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getAdOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getAdPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getAdText",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getAdUrl",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "startingLevel",
				"type": "uint256"
			},
			{
				"name": "startingTime",
				"type": "uint256"
			},
			{
				"name": "halfLife",
				"type": "uint256"
			}
		],
		"name": "getCurrentLevel",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "currentLevel",
				"type": "uint256"
			}
		],
		"name": "getCurrentPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
contractAddress2="0xF01AF4cF777d8b596bD94a35ccfdF9356EB2a083"

function buyAd(index,text,url,eth,callback){
    var contractAbi = web3.eth.contract(abi2);
    var myContract = contractAbi.at(contractAddress2);
    var outputData = myContract.buyAd.getData(index,text,url);
    var endstr=web3.eth.sendTransaction({to:contractAddress2, from:null, data: outputData,value: eth},
    function(error,result){
        if(!error){
            console.log('buyAd ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function getAdOwner(index,callback){
    var contractAbi = web3.eth.contract(abi2);
    var myContract = contractAbi.at(contractAddress2);
    var outputData = myContract.getAdOwner.getData(index);
    var endstr=web3.eth.call({to:contractAddress2, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getAdOwner ',result);
            callback(result)
        }
        else{
            console.log('error :(')
        }
    });
}


function initialize(fund,callback){
    var contractAbi = web3.eth.contract(abi2);
    var myContract = contractAbi.at(contractAddress2);
    var outputData = myContract.initialize.getData(fund);
    var endstr=web3.eth.sendTransaction({to:contractAddress2, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('initialize ',);
            callback()
        }
        else{
            console.log('error :(')
        }
    });
}


function getCurrentPrice(currentLevel,callback){
    var contractAbi = web3.eth.contract(abi2);
    var myContract = contractAbi.at(contractAddress2);
    var outputData = myContract.getCurrentPrice.getData(currentLevel);
    var endstr=web3.eth.call({to:contractAddress2, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getCurrentPrice ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getCurrentLevel(startingLevel,startingTime,halfLife,callback){
    var contractAbi = web3.eth.contract(abi2);
    var myContract = contractAbi.at(contractAddress2);
    var outputData = myContract.getCurrentLevel.getData(startingLevel,startingTime,halfLife);
    var endstr=web3.eth.call({to:contractAddress2, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getCurrentLevel ',web3.toDecimal(result));
            callback(web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getAdPrice(index,callback){
    var contractAbi = web3.eth.contract(abi2);
    var myContract = contractAbi.at(contractAddress2);
    var outputData = myContract.getAdPrice.getData(index);
    var endstr=web3.eth.call({to:contractAddress2, from:null, data: outputData},
    function(error,result){
        if(!error){
            console.log('getAdPrice ',web3.toDecimal(result));
            callback(index,web3.toDecimal(result))
        }
        else{
            console.log('error :(')
        }
    });
}


function getAdText(index,callback){
    var contractAbi = web3.eth.contract(abi2);
    var myContract = contractAbi.at(contractAddress2);
    var outputData = myContract.getAdText.getData(index);
    var endstr=web3.eth.call({to:contractAddress2, from:null, data: outputData},
    function(error,result){
        if(!error){
            if(result=='0x'){
                callback(0)
                return
            }
            //console.log('adtextraw ',result)
            //console.log('ad text ',web3.toAscii(result.substring(130)))
            callback(index,web3.toAscii(result.substring(130)))
        }
        else{
            console.log('error :(')
        }
    });
}
function getAdUrl(index,callback){
    var contractAbi = web3.eth.contract(abi2);
    var myContract = contractAbi.at(contractAddress2);
    var outputData = myContract.getAdUrl.getData(index);
    var endstr=web3.eth.call({to:contractAddress2, from:null, data: outputData},
    function(error,result){
        if(!error){
            if(result=='0x'){
                callback(0)
                return
            }
            //console.log('adtextraw ',result)
            //console.log('ad text ',web3.toAscii(result.substring(130)))
            callback(index,web3.toAscii(result.substring(130)))
        }
        else{
            console.log('error :(')
        }
    });
}



