//logic happens here
var accounts = {
  checking: {
    balance: 0,
    deposit: function (amount) {
      if (amount > 0){
        accounts.checking.balance += amount;
      } 
    },
    withdraw: function (amount) {
      if (amount <= accounts.checking.balance){
        accounts.checking.balance -= amount;
      }  
    }
  },

  savings: {
    balance: 0,
    deposit: function (amount) {
      if (amount > 0 ){
        accounts.savings.balance += amount;
      }
    },
    withdraw: function (amount) {
      if (amount <= accounts.savings.balance){
        accounts.savings.balance -= amount;
      }
    }
  },

  
};

var withdraw = function(account, amount){
  if ((accounts.checking.balance + accounts.savings.balance) >= amount) {
    if (account.balance < amount){
      var rest = amount - account.balance;
      account.balance -= account.balance;
      if (account === accounts.savings){
        accounts.checking.balance -= rest;
      } else {
        accounts.savings.balance -= rest;
      }
    } else {
      account.withdraw(amount);
    }
  } 
}

var deposit = function(account, amount){
  account.deposit(amount);
}

//handle the inputs all DOM stuff
var ATM;
$(document).ready(function() {
  
  ATM = {
    ui: {//js references to the buttons from html
      $checkingDeposit: $('#checkingDeposit'),
      $checkingWithdrawal: $('#checkingWithdraw'),
      $checkingAmount: $('#checkingAmount'),
      $checkingBalance: $('#balance1'),
      $checkingAccount: $('#checkingAccount'),

      $savingsDeposit: $('#savingsDeposit'),
      $savingsWithdrawal: $('#savingsWithdraw'),
      $savingsAmount: $('#savingsAmount'),
      $savingsBalance: $('#balance2'),
      $savingsAccount: $('#savingsAccount')
    },
    updateChecking: function(){
      //update balance on the screen
      ATM.ui.$checkingBalance.text( '$' + accounts.checking.balance);
      //clear out the input
      ATM.ui.$checkingAmount.val('');
      if(accounts.checking.balance === 0) {
        ATM.ui.$checkingAccount.addClass('zero');
      } else {
        ATM.ui.$checkingAccount.removeClass('zero');
      }
    },
    updateSavings: function(){
      ATM.ui.$savingsBalance.text( '$' + accounts.savings.balance);
      ATM.ui.$savingsAmount.val('');
      if(accounts.savings.balance === 0){
        ATM.ui.$savingsAccount.addClass('zero');
      } else {
        ATM.ui.$savingsAccount.removeClass('zero');
      }
    }
  };

  //dealing with chek account
  ATM.ui.$checkingDeposit.on('click', function(){
    var amount = parseInt(ATM.ui.$checkingAmount.val(), 10);
    deposit(accounts.checking, amount);
    ATM.updateChecking();
    ATM.updateSavings();
  });

  ATM.ui.$checkingWithdrawal.on('click', function(){
    var amount = parseInt(ATM.ui.$checkingAmount.val(), 10);
    // update the account balance in memory
    withdraw(accounts.checking, amount);
  
    ATM.updateChecking(); 
    ATM.updateSavings();
  });

  ATM.updateChecking();


  //dealing with savings account
  ATM.ui.$savingsDeposit.on('click', function(){
    var amount = parseInt( ATM.ui.$savingsAmount.val() );
    deposit(accounts.savings, amount);
    ATM.updateSavings();
    ATM.updateChecking();
  });

  ATM.ui.$savingsWithdrawal.on('click', function(){
    var amount = parseInt( ATM.ui.$savingsAmount.val() );
    withdraw(accounts.savings, amount);
    ATM.updateSavings();
    ATM.updateChecking();
  });

  ATM.updateSavings();
});

