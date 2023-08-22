/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    
  let col = new Set()
  posDiag = new Set()
  negDiag = new Set()

  res = []
  board = Array.from({ length: n }, () => Array(n).fill('.'));

  function backTrack(row) {
     
      if (row === n) {
           
          let ret = board.reduce( (acc, current) => {

              var str = current.join("")    
              
              acc.push(str);

              return acc;

          }, [])

          res.push(ret)


          return
      } 

      for (let c = 0; c < n; c++) {
        
          if (col.has(c) || posDiag.has(row+c) || negDiag.has(row-c)) {
             
              continue
          }
          col.add(c)
          posDiag.add(row+c)
          negDiag.add(row-c)
          board[row][c] = 'Q'

          backTrack(row+1)

          col.delete(c)
          posDiag.delete(row+c)
          negDiag.delete(row-c)
          board[row][c] = '.'
         
         
      }


  }

  backTrack(0)

  return res;

};