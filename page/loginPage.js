var webdriver = require('selenium-webdriver');
var {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('assert');



class loginPage {

    go_to_url(url){
    console.log(url)
    return driver.get(url);
      
      }
      
    enterZehut(Zehut) {
        return driver.findElement(webdriver.By.id('vm_userZehut')).sendKeys(Zehut)
      }

    enterUserName(userName) {
        return driver.findElement(webdriver.By.id('vm_userName')).sendKeys(userName)
    
      }

    enterpassword(password) {
        return driver.findElement(webdriver.By.id('vm_password')).sendKeys(password)
    
      }
    
    click() {
        return driver.findElement(webdriver.By.name('btnLogin')).click()
      }
      
    waitToPersonalPage() {
      return driver.wait(until.urlIs("https://ps.btl.gov.il/#/Personal/Summary"),10000)
      }

    getCurrentUrl() {
        return driver.getCurrentUrl() 
      }
    zehutErrorIsDisabled() {
        return driver.findElement(webdriver.By.id( 'vm_userZehut_lblErr')).isDisplayed()
      }

    alertMessageIsDisabled() {
        return driver.findElement(webdriver.By.className('alert alert-danger ng-scope')).isDisplayed()
      }

    userNameErrorIsDisabled() {
        return driver.findElement(webdriver.By.id( 'vm_userName_lblErr')).isDisplayed()
      }
    
    passwordErrorIsDisabled() {
        return driver.findElement(webdriver.By.id('vm_password_lblErr')).isDisplayed()
      }
    urlIsEquelPersonalPage(current_url){
        return assert.strictEqual(current_url,"https://ps.btl.gov.il/#/Personal/Summary" )

    }

    errorMessageIsTrue(error_message){
        return assert.strictEqual(error_message,true)}
        
    }





module.exports =new loginPage

