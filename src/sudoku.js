function Sudoku (board)

{
  this.board = board;
}


Sudoku.prototype.checkLegal = function()
{
  for (var i= 0; i < this.board.length; i++)
  {
    var array = this.board[i];
    var dict={};
    for(var j =0; j < array.length; j++)
    {

      if (array[j] in dict || array[j] > 9 || array[j] <1)
      {

        return false;
      }
      else
      {
        dict[array[j]]=1;
      }
    }
  }
  return true;
}

exports.sudokuModule = Sudoku;
