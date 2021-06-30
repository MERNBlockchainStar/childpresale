let web3 = new web3js.myweb3(window.ethereum);
let account;
let min_val = 0;
let max_val = 5;
let _owner
async function onInit() {
    if ( window.ethereum == undefined) {
        Swal.fire(
            'Connect Alert',
            'Please install Metamask',
            'error'
        )
        $(body).html("Please install Metamask. try again")
        return ;
    }else {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];
         window.ethereum.on('accountsChanged', function (accounts) {
            // Time to reload your interface with accounts[0]!
            account = accounts[0];
            console.log(accounts[0])
        });
    }
}

async function isActive() {
    // const chainId = await web3.eth.getChainId();
    if ( web3 ) {
        return true;
    }else {
        Swal.fir(
            "please install metamask and connect to bsc network"
        )
        return false;
    }
}

async function startPresaleAirdrop() {
    if (! await isActive() ) {
       return;
    }
    if(account.toLowerCase() != _owner.toLowerCase()) {
        Swal.fire (
            "You are not Owner!"
        )
        return;
    }
    let chainId = await web3.eth.getChainId();
    if(chainId != netId){
        Swal.fie(
            "please connect testnet"
        )
    }
    let min_val = $('#min_amount').val();
    let max_val = $('#max_amount').val();
    let cap_amount = $('#cap_amount').val();
    let price = $('#price').val();
    let airdrop_amount = $('#airdrop_amount').val();
    let end_date = $('#end_date').val();
    if( min_val =="" || max_val =="" || cap_amount == '' || price == "" || airdrop_amount=="" || end_date =="") {
        Swal.fire(
            "please inert all information!"
        )
        return
    }
    if(min_val > max_val) {
        Swal.fire(
            "minium value must be less than maxium value!"
        )
        return
    }
    if( price <= 0 ){
        Swal.fire(
            "presale price must be not zero"
        )
        return
    }
    let min_val_big = new BigNumber( min_val * 1e18);
    let max_val_big = new BigNumber( max_val * 1e18 );
    let price_big = new BigNumber( price * 1e18);
    let cap_amount_big = new BigNumber( cap_amount * 1e18 );
    let airdrop_amount_big = new BigNumber( airdrop_amount * 1e18 );
    let airdrop_number_big = new BigNumber(100 * 1e18);
    let x = new Date(end_date).getTime();
    let y = new Date().getTime();
    if(x <y ){
        Swal.fire(
            "please select another day"
        )
    }
    let _sblock =  await web3.eth.getBlockNumber();
    let eblock = _sblock + Math.round( ( x - y )/ 3000 );
    showLoading()

    let childcontract = new web3.eth.Contract(sttabi,sttaddr);
    childcontract.methods.start(
        min_val_big.toString(), 
        max_val_big.toString(), 
        eblock, 
        price_big.toString(), 
        cap_amount_big.toString(), 
        airdrop_amount_big.toString(), 
        airdrop_number_big.toString()
    ).send({from: account}, (err, res) =>{
        if(err) {
            endLoading()
            Swal.fire (
                "setting failed!"
            )
        }
    }).on('receipt', function (receipt) {
        endLoading()
        Swal.fire(
            "setting successed!"
        )
    })
}


async function getAirdrop() {
    if(! await isActive()){
        return;
    }
    
    let childcontract = new web3.eth.Contract(sttabi, sttaddr);
    let _hasairdrop = await childcontract.methods.getAirdropStatus(account).call();
    if(_hasairdrop) {
        Swal.fire(
            "you have already got airdrop!"
        )
        return;
    }
    showLoading()
    await childcontract.methods.getAirdrop().send({from: account}, (err, res) => {
        if(err) {
            endLoading()
            Swal.fire(
                "Airdrop failed"
            )
        }
    }).on('receipt', function(receipt) {
        endLoading()
        if(receipt.status){
            Swal.fire(
                "Airdrop successed!"
            )
        }else {
            Swal.fire(
                "Airdrop failed!"
            )
        }
        console.log(receipt)
    })
}

async function buyToken() {
    let _active = await isActive();
    console.log(_active)
    if(! await isActive()){
        return;
    }

    showLoading()
    let _bnbVal = $('#bnbinput').val();
    if(_bnbVal < min_val) {
        Swal.fire(
            "must be higer than " + min_val
        )
        return
    }
    if(_bnbVal > max_val) {
        Swal.fire (
            "must be less than " + max_val
        )
        return; 
    }
    let _bnbval_big = new BigNumber( _bnbVal * 1e18);
    let childcontract = new web3.eth.Contract(sttabi, sttaddr);
    try {
        let tx = await childcontract.methods.tokenSale().send({from: account, value: _bnbval_big.toString()}, (err, res) => {
            if(!err) {
            }else {
                Swal.fire(
                    "buy token failed!"
                )
            }
        }).on("receipt", function(receipt) {
            endLoading()
            if(receipt.status) {
                Swal.fire(
                    "buy token successed!"
                )
            } else {
                Swal.fire(
                    "buy token failed!"
                )
            }
        })
    }catch (error) {
        endLoading()
        Swal.fire(
            `Buy error ${error?.data?.message}`
        )
    }
}
async function getInfomation () {
    if(! await isActive()){
        return;
    }

    let childcontract = new web3.eth.Contract(sttabi, sttaddr);
    let tx = await childcontract.methods.getInfo().call({from : account}, (err, res) => {
        console.log(res);
        if(!err) {
            $('#raised').html(res.minval / 1e18) //minium BNB value for presale
            $('#target').html(res.maxval / 1e18) // maxium BNB value for presale
            $('#raised').html(res.balance / 1e18) // current got bnb amount
            $('#target').html(res.salecap / 1e18) // target bnb amount
            let eblock = res.Eblock; 
            let _currentblock =  res.currentBlock;
            let reserve = eblock -_currentblock;
            console.log(reserve)
            let end_date = new Date (new Date().getTime() + reserve*3000)
            let _edate = end_date.getFullYear()  +"/" +( end_date.getMonth() + 1 )  +"/" + end_date.getDay()      
            $('#enddate').attr('data-date', _edate);
            console.log(_edate)
            NioApp.Plugins.countdown();
            let _rate = 0
            if(res.salecap != 0) {
                _rate = 100 * res.balance / res.salecap;
            }
            min_val = res.minval / 1e18;
            max_val = res.maxval / 1e18;
            $("#progressbar").css('width', _rate + '%'); 
            $("#progressbar").css('right', _rate + '%'); 

            $("#ratesale").html(res.price /1e18 + " BNB")
            $("#maxamount_view").html(res.minval /1e18 + "-" + res.maxval / 1e18 + "BNB")
            $("#hardcap").html(res.salecap / 1e18 + " BNB");
            $("#sold_amount").html(res.currentamount / 1e18);
            $("#bnbinput").val(min_val)

        }
    })
    _owner = await childcontract.methods.getOwner().call()
}

function getreflink() {
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
                    'address': sttaddr,
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

async function withdraw() 
{
    if(! await isActive() ) {
        Swal.fire(
            "please connect to metamask."
        )
        return;
    }
    let childcontract = new web3.eth.Contract(sttabi, sttaddr);
    if(account.toLowerCase() !=_owner.toLowerCase()) {
        Swal.fire(
            "You are not Owner."
        )
        return;
    }
    try {
        showLoading();
        await childcontract.methods.clearBNB()
        .send({from: account})
        .on('receipt' , 
        function (receipt){
            if(receipt.status) {
                endLoading()
                Swal.fire(
                    "withdraw success!"
                )
            }
        })
    }
    catch (error) {
        endLoading()
        Swal.fire(
            "Withdraw failed"
        )
    }
}
function showLoading() {
    document.getElementById('loadingmsg').style.display = 'block';
    document.getElementById('loadingover').style.display = 'block';
}
function endLoading() {
    document.getElementById('loadingmsg').style.display = 'none';
    document.getElementById('loadingover').style.display = 'none';
}
onInit();
