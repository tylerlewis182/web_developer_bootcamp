// variables
var p1_button = document.querySelector("#p1_button");
var p2_button = document.querySelector("#p2_button");
var reset_button = document.querySelector("#reset_button");
var p1_display = document.querySelector("#p1_display");
var p2_display = document.querySelector("#p2_display");
var num_input = document.querySelector("input");
var winning_score_display = document.querySelector("p span");

var p1_score = 0;
var p2_score = 0;
var game_over = false;
var winning_score = 5;


// add event listeners
p1_button.addEventListener("click", function()
{
  if(!game_over)
  {
    p1_score++;
    if(p1_score === winning_score)
    {
      game_over = true;
      p1_display.classList.add("winner");
    }
    p1_display.textContent = p1_score;
  }
});

p2_button.addEventListener("click", function()
{
  if(!game_over)
  {
    p2_score++;
    if(p2_score === winning_score)
    {
      game_over = true;
      p2_display.classList.add("winner");
    }
    p2_display.textContent = p2_score;
  }
});

reset_button.addEventListener("click", function()
{
  reset();
});

function reset()
{
  p1_display.classList.remove("winner");
  p2_display.classList.remove("winner");
  p1_score = 0;
  p2_score = 0;
  p1_display.textContent = 0;
  p2_display.textContent = 0;
  game_over = false;
}

num_input.addEventListener("change", function() // this === num_input (points to current object)
{
  winning_score_display.textContent = this.value;
  winning_score = Number(this.value);
  reset();
});
