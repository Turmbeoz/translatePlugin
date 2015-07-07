#Algorithms

##Summary
### Big-O Notation
![inline](http://blog.thejsj.com/content/images/2014/12/Big-O-Notation.png)
Big-O notation is used to used to compare the efficiency of algorithms and data structures. It
provides an upper bound on worst-case runtime and an approximation of how things scale.
In general, we find these approximations by counting operations. Operations such as
declarations/assignments, comparisons, object accesses, and simple mathematical operations are
usually generalized to take constant time (aka 1 unit of time).

Since Big-O is used to approximate how algorithms scale when input size grows towards infinity, you
can get rid of constant factors and additive terms with smaller orders of
growth. We only want to keep the term that is of the highest order of magnitude because it will
dominate the function as the problem-size grows.

### Recursion
When attempting to solve an algorithm, there are generally two routes you can take: the iterative or the
recursive route. A recursive function is simply a function that calls itself. Instead of using
a loop to repeat steps and solve the problem iteratively, you can write a recursive function that
will use itself to break down the problem into smaller parts and piece together the solution.

Remember the 3 crucial parts of a recursive function:
1. Base Case
    * handle the simplest input
2. Recursive Call
    * call the function on a simpler input
    * take a "leap of faith"
        * assume your recursive call with work and use it to solve the bigger problem
3. Return
    * return your result so that you have something to use during your leap of faith

##How do I get started?
1. Fork this repo
  - click on fork button on the top right of the page ![Alt text](http://u.cubeupload.com/azai91/howtofork.png)
  - click on your handle to fork to your repo

2. Clone the repo
  - copy and paste github url from the right side of the ![Alt text](http://u.cubeupload.com/azai91/howtoclone.png)
  - type in the following line into your command line and insert your copies url as shown below:
  ````
  git clone *github url
  ````

3. Complete the challenge in located in src/ directory. We recommend completing the algorithms in the following order (the order they appear in the tests):

- Coin Sum
- N-Paths

##How do I test if my answer is correct?
* To test your functions, open index.html in your browser
** NOTE: While completing the challenges, if all tests that previously passed ALL suddenly fail, there is most likely a syntax error in your code. Open Chrome Dev Tool's to locate the cause of the error.
