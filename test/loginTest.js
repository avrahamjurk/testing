var loginPage = require('../pageObjects/loginPage')
var before = require('../pageObjects/components/before')
var after = require('../pageObjects/components/after')



const URL = "https://ps.btl.gov.il/#/login"
const correct_Zehut = '200756914'
const incorrect_Zehut = '200756911'
const correct_User_Name = 'PBKM5N8N'
const incorrect_User_Name = '12345678'
const short_User_Name = '1234'
const correct_password = 'meli2007'
const incorrect_password = 'abcd1234'
const short_password = 'abc12'




describe('testing example', function() {
this.retries(3);

  
beforeEach(before())
afterEach(after())





  it('1. insert correct Zehut and user_name and password'
  ,async function (){
    await loginPage.go_to_url(URL)
    await loginPage.enterZehut(correct_Zehut)
    await loginPage.enterUserName(correct_User_Name)
    await loginPage.enterpassword(correct_password)
    await loginPage.click()
    try {
    await loginPage.waitToPersonalPage()
    console.log(true)
        }
    catch {
    console.log(false)
          }
    let current_url = await loginPage.getCurrentUrl()
    console.log(current_url)
    loginPage.urlIsEquelPersonalPage(current_url)
  });





  it ("2. insert incorret Zehut",async function(){

    await loginPage.go_to_url(URL)
    await loginPage.enterZehut(incorrect_Zehut)
    await loginPage.click()
    try{ 
    await loginPage.zehutErrorIsDisabled()
    error_message = true;
    }
    catch{
    error_message = false;
    }
    console.log(error_message)
    
    loginPage.errorMessageIsTrue(error_message)
  })




  it ("3. insert incorret userName",async function(){

    await loginPage.go_to_url(URL)
    await loginPage.enterZehut(correct_Zehut) 
    await loginPage.enterUserName(incorrect_User_Name)
    await loginPage.enterpassword(correct_password)
    await loginPage.click()
    try{
    await loginPage.alertMessageIsDisabled()
    error_message = true; }
    catch{
    error_message = false; }
    console.log(error_message);
    loginPage.errorMessageIsTrue(error_message)
     
    }) 





  it ("4. insert incorret password",async function(){

    await loginPage.go_to_url(URL)
    await loginPage.enterZehut(correct_Zehut)
    await loginPage.enterUserName(correct_User_Name)
    await loginPage.enterpassword(incorrect_password)
    await loginPage.click()
    try{
    await loginPage.alertMessageIsDisabled()
    error_message = true;
        }
    catch{
    error_message = false;
        } 
    console.log(error_message)
    loginPage.errorMessageIsTrue(error_message)
    
   }) 






            
  it ("5. insert short userName",async function(){

    await loginPage.go_to_url(URL)
    await loginPage.enterZehut(correct_Zehut)
    await loginPage.enterUserName(short_User_Name)
    await loginPage.enterpassword(correct_password)
    await loginPage.click()
    try{
    await loginPage.userNameErrorIsDisabled()
    error_message = true
        }
    catch{
    error_message = false
        }

    console.log(error_message)
    loginPage.errorMessageIsTrue(error_message)
  
  }) 




  it ("6. insert short password",async function(){

    await loginPage.go_to_url(URL)
    await loginPage.enterZehut(correct_Zehut)
    await loginPage.enterUserName(correct_User_Name)
    await loginPage.enterpassword(short_password)
    await loginPage.click()
    try{
    await loginPage.passwordErrorIsDisabled()
    error_message = true;
    } 
    catch{
    error_message = false;
    }
      
    console.log(error_message)
    loginPage.errorMessageIsTrue(error_message)
    })


    })     
