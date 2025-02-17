class fbsignup{




constructor(page){

    this.page = page;
    this.firstname = page.locator("[name='firstname']");
    this.lastname  = page.locator("[name='lastname']");
    this.day = page.locator("//select[@id='day']");
    this.month = page.locator("//select[@id='month']");
    this.year  = page.locator("//select[@id='year']");
    this.gender = page.locator("//label[normalize-space()='Male']");
    this.mobilenumber = page.locator("//input[@name='reg_email__']");
    this.newpassword = page.locator("#password_step_input");
    

}

async goTo(){
     
    await this.page.goto("https://www.facebook.com/signup");
  
  }

async validtextbox(firstname,lastname){

    await this.firstname.fill(firstname); 
    await this.lastname.fill(lastname);
}

async validdropdown(){
    
    await this.day.selectOption("20");
    await this.month.selectOption("Jun");
    await this.year.selectOption("1997");

}

async ValidRadiobutton(){
    
    await this.gender.click();

}

async ValidMobilenumber(mobilenumber){
    await this.mobilenumber.fill(mobilenumber);

}


async Validpassword(password){

    await this.newpassword.fill(password);

}

}module.exports = {fbsignup};

