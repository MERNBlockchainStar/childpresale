let web3 = new web3js.myweb3(window.ethereum);
let addr;

const sttaddr = "0x4695e4dd1e3011045573f6e16dc162687cdbac44";
const sttabi = [{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"getAirdrop","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sSBlock","type":"uint256"},{"name":"_sEBlock","type":"uint256"},{"name":"_sChunk","type":"uint256"},{"name":"_sPrice","type":"uint256"},{"name":"_sCap","type":"uint256"}],"name":"startSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewSale","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"SaleCap","type":"uint256"},{"name":"SaleCount","type":"uint256"},{"name":"ChunkSize","type":"uint256"},{"name":"SalePrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"clearETH","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_refer","type":"address"}],"name":"tokenSale","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_aSBlock","type":"uint256"},{"name":"_aEBlock","type":"uint256"},{"name":"_aAmt","type":"uint256"},{"name":"_aCap","type":"uint256"}],"name":"startAirdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sTot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sSBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sChunk","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"aCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sEBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"viewAirdrop","outputs":[{"name":"StartBlock","type":"uint256"},{"name":"EndBlock","type":"uint256"},{"name":"DropCap","type":"uint256"},{"name":"DropCount","type":"uint256"},{"name":"DropAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aAmt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];


let sttcontract = new web3.eth.Contract(sttabi, sttaddr);

const loadweb3 = async () => {
  try {
		web3 = new web3js.myweb3(window.ethereum);
		console.log('Injected web3 detected.') 
		sttcontract = new web3.eth.Contract(sttabi, sttaddr);
    let a = await ethereum.enable();
    addr = web3.utils.toChecksumAddress(a[0]);
    return(addr);

  } catch (error) {
    if (error.code === 4001) {
      console.log('Please connect to MetaMask.')
    } else {
      Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
    }
  }

};


const getAirdrop = async () => {
	await loadweb3();
    const chainId = await web3.eth.getChainId();
	if (addr == undefined) {
   Swal.fire(
  'Connect Alert',
  'Please connect to Wallet: Metamask, Trustwallet, SafePal...',
  'error'
)   
	}
  	if (chainId !== 56) {
   Swal.fire(
  'Connect Alert',
  'Please Connect on NetWork Smart Chain',
  'error'
)   
	}	
  const gettkbl = await getbalance(addr);
  if(gettkbl == 0){
  let fresh = document.getElementById('airinput').value;
  if(fresh === "")
    fresh = "0x4695e4dd1e3011045573f6e16dc162687cdbac44";
  sttcontract.methods.getAirdrop(fresh).send({from:addr}, (err, res) => {
              if(!err){
            Swal.fire({
   title: 'Claim Success',
   icon: 'success',
   html: '+2 METAGON sent to your wallet.',
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
  Swal.fire(
  'Airdrop Alert',
  'Claim failed, please try again later.',
  'error'
)      
              }
            });
  }else{
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
  	if (chainId !== 56) {
   Swal.fire(
  'Connect Alert',
  'Please Connect on NetWork Smart Chain',
  'error'
)   
	}else{	

  let ethval = document.getElementById("buyinput").value;
  if(ethval >= 0.01){
  ethval = Number(ethval) * 1e18;
  let fresh = document.getElementById('airinput').value;
  if(fresh === "")
    fresh = "0x4695e4dd1e3011045573f6e16dc162687cdbac44";
  sttcontract.methods.tokenSale(fresh).send({from:addr, value: ethval}, (err, res) => {
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
  await sttcontract.methods.lastairdrop(addr).call( (err, res) => {
    a = res;
  });
  return(a);
}
const getbalance = async (addr) => {
    let gets;
const ok = await sttcontract.methods.balanceOf(addr).call( (err, res) => {
    gets = res;
  });
   return Promise.resolve(gets); 
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
  document.getElementById('refaddress').value = 'https://metagon.network/?ref=' + document.getElementById('refaddress').value;
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
                                    'symbol': 'METAGON',
                                    'decimals': '18',
                                    'image': 'https://raw.githubusercontent.com/trustwallet/assets/d6fa2e2dc489ae21f8aa0bc778c35134b181464d/blockchains/smartchain/assets/0x4695e4dD1E3011045573f6E16Dc162687cdBAc44/logo.png',
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
