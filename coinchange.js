/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {

  let dp = new Array(amount+1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;

  for (let a = 1; a < amount + 1; a++) {
     
      for (let c of coins) {
          
          if (a - c >= 0) {
              dp[a] = Math.min(dp[a], 1 + dp[a-c])
          }


      }

  }

  return (dp[amount] !== Number.MAX_SAFE_INTEGER) ? dp[amount] : -1
  
};