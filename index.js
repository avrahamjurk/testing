var assert = require('assert');
const { accessSync } = require('fs');
const webdriver = require('selenium-webdriver');
const { addConsoleHandler } = require('selenium-webdriver/lib/logging');
const { go_to_url } = require('./findElement');



until = webdriver.until;

const URL = "https://ps.btl.gov.il/#/login"
const correct_Zehut = '200756914'
const incorrect_Zehut = '200756911'
const correct_User_Name = 'PBKM5N8N'
const incorrect_User_Name = '12345678'
const short_User_Name = '1234'
const correct_password = 'meli2007'
const incorrect_password = 'abcd1234'
const short_password = 'abc12'
const Zehut_forms = 'vm_userZehut'
const user_name_forms = 'vm_userName'
const password_forms = 'vm_password'
const enter_button = 'btnLogin'
const Zehut_error_message = 'vm_userZehut_lblErr'
const alert_message = 'alert alert-danger ng-scope'
const user_name_error_message = 'vm_userName_lblErr'
const password_error_message = 'vm_password_lblErr'






describe('testing example', function() {
  var driver;

beforeEach(function() {
driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
});
afterEach(function() { driver.close(); });




  
  



it('1. insert correct Zehut and user_name and password',async function (){

    await go_to_url(URL)
    await driver.findElement(webdriver.By.id(Zehut_forms)).sendKeys(correct_Zehut)
    await driver.findElement(webdriver.By.id(user_name_forms)).sendKeys(correct_User_Name)
    await driver.findElement(webdriver.By.id(password_forms)).sendKeys(correct_password)
    await driver.findElement(webdriver.By.name(enter_button)).click()
    try{
    await driver.wait(until.urlIs("https://ps.btl.gov.il/#/Personal/Summary"),10000)
          console.log(true)}
    catch{
          console.log(false)}
    current_url = await driver.getCurrentUrl()
                console.log(current_url)
       assert.strictEqual(current_url,"https://ps.btl.gov.il/#/Personal/Summary" )
  
   });





 it ("2. insert incorret Zehut",async function(){

  await go_to_url(URL)
  await driver.findElement(webdriver.By.id(Zehut_forms)).sendKeys(incorrect_Zehut)
  await driver.findElement(webdriver.By.name(enter_button)).click() 
  
  try{ 
    await driver.findElement(webdriver.By.id(Zehut_error_message)).isDisplayed()
    error_message = true;
  }
  catch{
    error_message = false;
  }
  console.log(error_message)
  assert.strictEqual(error_message,true)
})


  it ("3. insert incorret userName",async function(){

  await go_to_url(URL)

  await driver.findElement(webdriver.By.id(Zehut_forms)).sendKeys(correct_Zehut)
  await driver.findElement(webdriver.By.id(user_name_forms)).sendKeys(incorrect_User_Name)
  await driver.findElement(webdriver.By.id(password_forms)).sendKeys(correct_password)
  await driver.findElement(webdriver.By.name(enter_button)).click()
  
  try{
  await driver.wait(  until.elementLocated(webdriver.By.className(alert_message)), 10000)
  await driver.findElement(webdriver.By.className(alert_message)).isDisplayed()
  error_message = true; }
  catch{
    error_message = false; }

    console.log(error_message);
    assert.strictEqual(error_message,true) 
      }) 






  it ("4. insert incorret password",async function(){

        await go_to_url(URL)
      
        await driver.findElement(webdriver.By.id(Zehut_forms)).sendKeys(correct_Zehut)
        await driver.findElement(webdriver.By.id(user_name_forms)).sendKeys(correct_User_Name)
        await driver.findElement(webdriver.By.id(password_forms)).sendKeys(incorrect_password)
        await driver.findElement(webdriver.By.name(enter_button)).click()
          try{
              await driver.wait(  until.elementLocated(webdriver.By.className(alert_message)), 10000)
              await driver.findElement(webdriver.By.className(alert_message)).isDisplayed()
              error_message = true;
              console.log('yes')
            }
          catch{
            console.log('no')
              error_message = false;
            } 
          console.log(error_message)
          assert.strictEqual(error_message,true)
              }) 






            
  it ("5. insert short userName",async function(){

    await go_to_url(URL)


    await driver.findElement(webdriver.By.id(Zehut_forms)).sendKeys(correct_Zehut)
    await driver.findElement(webdriver.By.id(user_name_forms)).sendKeys(short_User_Name)
    await driver.findElement(webdriver.By.id(password_forms)).sendKeys(correct_password)
    await driver.findElement(webdriver.By.name(enter_button)).click()
    try {
          await driver.findElement(webdriver.By.id(user_name_error_message)).isDisplayed()
          error_message = true
          console.log('yes')
        }
    catch {
            error_message = false
            console.log('no')
          }

    console.log(error_message)
    assert.strictEqual(error_message,true)
  
  }) 




  it ("6. insert short password",async function(){

    await go_to_url(URL)

    await driver.findElement(webdriver.By.id(Zehut_forms)).sendKeys(correct_Zehut)
    await driver.findElement(webdriver.By.id(user_name_forms)).sendKeys(correct_User_Name)
    await driver.findElement(webdriver.By.id(password_forms)).sendKeys(short_password)
    await driver.findElement(webdriver.By.name(enter_button)).click()

    try{
    await driver.findElement(webdriver.By.id(password_error_message)).isDisplayed()
    error_message = true;
    console.log('yes')
    } 
    catch{
      error_message = false;
      console.log('no')
    }
      
      console.log(error_message)
      assert.strictEqual(error_message,true) })


      






function go_to_url(url){
  return new Promise((resolve)=>{
      driver.get(url)
      console.log(url)
      resolve()
  })
}




})