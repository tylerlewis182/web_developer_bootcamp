#include <iostream>
using namespace std;

// flags
bool airplane_crashing = true;

// functions
void dont_crash()
{
  airplane_crashing = false;
}

// main
int main()
{
  if(airplane_crashing)
  {
    dont_crash();
  }

  cout << airplane_crashing << endl;

}
