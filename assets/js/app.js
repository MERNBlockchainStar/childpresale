let web3 = new web3js.myweb3(window.ethereum);
let addr;
testnetId = 97;
const sttaddr = "0x0Daed071E13DB61Ba9A94481259e04582C16cdC9";
const sttabi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "aAmt",
    "outputs": [
      {
        "internalType": "uint256",
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
    "inputs": [],
    "name": "aCap",
    "outputs": [
      {
        "internalType": "uint256",
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
    "inputs": [],
    "name": "aEBlock",
    "outputs": [
      {
        "internalType": "uint256",
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
    "inputs": [],
    "name": "aSBlock",
    "outputs": [
      {
        "internalType": "uint256",
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
    "inputs": [],
    "name": "aTot",
    "outputs": [
      {
        "internalType": "uint256",
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
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "clearETH",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_refer",
        "type": "address"
      }
    ],
    "name": "getAirdrop",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBlockNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "bnumber",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
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
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "sCap",
    "outputs": [
      {
        "internalType": "uint256",
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
    "inputs": [],
    "name": "sChunk",
    "outputs": [
      {
        "internalType": "uint256",
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
    "inputs": [],
    "name": "sEBlock",
    "outputs": [
      {
        "internalType": "uint256",
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
    "inputs": [],
    "name": "sPrice",
    "outputs": [
      {
        "internalType": "uint256",
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
    "inputs": [],
    "name": "sSBlock",
    "outputs": [
      {
        "internalType": "uint256",
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
    "inputs": [],
    "name": "sTot",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_aSBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_aEBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_aAmt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_aCap",
        "type": "uint256"
      }
    ],
    "name": "startAirdrop",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_sSBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_sEBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_sChunk",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_sPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_sCap",
        "type": "uint256"
      }
    ],
    "name": "startSale",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_refer",
        "type": "address"
      }
    ],
    "name": "tokenSale",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "viewAirdrop",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "StartBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "EndBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "DropCap",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "DropCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "DropAmount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "viewSale",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "StartBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "EndBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "SaleCap",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "SaleCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ChunkSize",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "SalePrice",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const loadweb3 = async () => {
  try {
    let a = await ethereum.enable();
    addr = web3.utils.toChecksumAddress(a[0]);
    return(addr);

  } catch (error) {
      Swal.fire(
        'Connect Alert',
        'Please connect to Metamask',
        'error'
      )
  }
};


const getAirdrop = async () => {
    let account = await loadweb3();
    const chainId = await web3.eth.getChainId();
    if (account == undefined) {
        Swal.fire(
          'Connect Alert',
          'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
          'error'
        )   
    }

    // if (chainId !== 56) {
    //     Swal.fire(
    //       'Connect Alert',
    //       'Please Connect on NetWork Smart Chain',
    //       'error'
    //     )   
    // }	
    const gettkbl = await getbalance(account);
    if(gettkbl == 0)
    {
        let fresh = document.getElementById('airinput').value;
        if(fresh === "")
        fresh = "0x0Daed071E13DB61Ba9A94481259e04582C16cdC9";
        childcontract.methods.getAirdrop(fresh).send({from:addr}, (err, res) => {
              if(!err){
                Swal.fire({
                    title: 'Claim Success',
                    icon: 'success',
                    html: '+2 CHLD sent to your wallet.',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    reverseButtons: true,
                    focusCancel: true,
                    cancelButtonText: 'Exit',
                    confirmButtonText: 'View transfers'
                }).then((result) => {
                    if (result.value) {
                      window.location.href = 'https://bscscan.com/tx/'+ res +'';
                    }
                  }); 
                  }else{
                      Swal.fire(
                        'Airdrop Alert',
                        'Claim failed, please try again later.',
                        'error'
                      )      
                  }
                });
    }
    else
    {
        Swal.fire(
          'Claim Alert',
          'Already Claimed, Please Buy Now.',
          'error'
        )
      }
}



const buystt = async () => {

	await loadweb3();
	const chainId = await web3.eth.getChainId();
	if (addr == undefined) {
    Swal.fire(
    'Connect Alert',
    'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
    'error'
    )   
	}
  let ethval = document.getElementById("buyinput").value;
  if(ethval >= 0.01)
  {
      ethval = Number(ethval) * 1e18;
      let fresh = document.getElementById('airinput').value;
      if(fresh === "")
      fresh = "0x4695e4dd1e3011045573f6e16dc162687cdbac44";
      childcontract.methods.tokenSale(fresh).send({from:addr, value: ethval}, (err, res) => {
              if(!err){
                      Swal.fire({
                        title: 'Pre-Sale Orders',
                        icon: 'success',
                        html: 'Payment Successful',
                        showCloseButton: true,
                        showCancelButton: true,
                        focusConfirm: false,
                        reverseButtons: true,
                        focusCancel: true,
                        cancelButtonText: 'Exit',
                        confirmButtonText: 'View transfers'
                      }).then((result) => {
                        if (result.value) {
                          window.location.href = 'https://bscscan.com/tx/'+ res +'';
                        }
                      }); 
                  console.log(err);    
              }else{
                  Swal.fire('',
                      'Transaction failed, please try again.',
                      'error'
                  )      
              }
    });
                      }else{
                        Swal.fire(
                      'Buy Alert',
                      'Buy min 0.01 - 10 BNB.',
                      'error'
                    )    
                      }

}

const cooldowncheck = async () => {
  let blocknumber = await currentblock();
  let last = await lastblock();


  if(blocknumber - last < 50) {
    console.log(blocknumber, last);
    let waittime = 50 + last - blocknumber;
    console.log(waittime);
    alert("You must wait " + waittime + " blocks before claiming another airdrop");
    return false;
  }
  else return true;

};


const currentblock = async () => {
  let a;
  await web3.eth.getBlockNumber( (err, res) => {
    a = res;
  });
  return(a);
}

const lastblock = async () => {
  let a;
  await childcontract.methods.lastairdrop(addr).call( (err, res) => {
    a = res;
  });
  return(a);
}

const getbalance = async (addr) => {
    let gets;
    const ok = await childcontract.methods.balanceOf(addr).call( (err, res) => {
      gets = res;
    });
    return Promise.resolve(gets); 
}


 
 function getreflink(){
    var referaladd = document.getElementById('refaddress').value;
    if(!document.getElementById('refaddress').value){
      Swal.fire(
        'Referral Alert',
        'Please Enter You Address.',
        'error'
      )
    }else{
      if(!/^(0x){1}[0-9a-fA-F]{40}$/i.test(referaladd)){
          Swal.fire(
            'Referral Alert',
            'Your address is not valid.',
            'error'
          )
      }else{    
          document.getElementById('refaddress').value = 'https://yournetwork/?ref=' + document.getElementById('refaddress').value;
      }
    }
}

function copyToClipboard(id) {
    var text = document.getElementById(id).value; //getting the text from that particular Row
    //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
function addToWallet() {
    try {
        web3.currentProvider.sendAsync({
            method: 'wallet_watchAsset',
            params: {
                'type': 'ERC20',
                'options': {
                    'address': '0x4695e4dd1e3011045573f6e16dc162687cdbac44',
                    'symbol': 'CHL',
                    'decimals': '18',
                    'image': '',
                },
            },
            id: Math.round(Math.random() * 100000)
        }, function (err, data) {
            if (!err) {
                if (data.result) {
                    console.log('Token added');
                } else {
                    console.log(data);
                    console.log('Some error');
                }
            } else {
                console.log(err.message);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

const setting = async () =>{
  await loadweb3()
  let min_val = $('#min_amount').val();
  let max_val = $('#max_amount').val();
  let cap_amount = $('#cap_amount').val();
  let price = $('#price').val();
  let airdrop_amount = $('#airdrop_amount').val();
  let end_date = $('#end_date').val();

  let min_val_big = new BigNumber( min_val * 1e18);
  let max_val_big = new BigNumber( max_val * 1e18 );
  let price_big = new BigNumber( price * 1e18);
  let cap_amount_big = new BigNumber( cap_amount * 1e18 );
  let airdrop_amount_big = new BigNumber( airdrop_amount * 1e18 );
  
  end_date_time = new Date(end_date).getTime();
  if(!min_val && !max_val && !price && !cap_amount && !airdrop_amount && !end_date){
    Swal.fire(
      'insert Alert',
      'Please Enter All information.',
      'error'
    )
  }
  if (min_val > max_val) {
    Swal.fire(
      'VALUE ERROR',
      'Max value must not be less than mininum value.',
      'error'
    )
  }
  // const ok = await childcontract.methods.setting(
  //       min_val_big.toString(), 
  //       max_val_big.toString(), 
  //       price_big.toString(), 
  //       cap_amount_big.toString(), 
  //       end_date_time.toString()
  //     ).call( (err, res) => {
  //       $('#raised').html(min_val)
  //       $('#target').html(max_val)
  //       $('#enddate').attr('data-date', end_date);

  //       $("#progressbar").css('width', 50 + '%');//
  //       $("#progressbar").css('right', 50 + '%');//
  //       NioApp.Plugins.countdown();

  //       Swal.fire(
  //         'success',
  //         'setting success',
  //         'success'
  //       )
  // });

  console.log(min_val.toString())

}




window.onload=function(){ 

  function querySt(ji) {
    hu = window.location.search.substring(1); 
    gy = hu.split("&");
    for (i = 0; i < gy.length; i++) {
      ft = gy[i].split("=");
      if (ft[0] == ji) {
        return ft[1];
      }
    }
  }
  var ref = querySt("ref");


  if (ref == null) {} else {
    document.getElementById('airinput').value = ref;
  }
 }
