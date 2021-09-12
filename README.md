# TDD Stack Case

Implemented Stack structure in Javacript. The purpose of working with these pre-written test cases is to get accustomed to the TDD cycle, and to get some ideas on what kind of tests to write.

Here are some links about TDD that i recommend:

- https://en.wikipedia.org/wiki/Test-driven_development
- https://talentgrid.io/test-driven-development-nedir/
- https://www.pluralsight.com/guides/introduction-to-test-driven-development-in-javascript

## Structure

properties

- pop: number
- data: array

operations:

1. `Push` → Add an element to the stack.
   1. data[top] = el
   2. top++
2. `Pop` → Delete an element from the stack.
   1. !isEmpty
      1. top--
      2. data.pop()
3. `Peek` → Get the top element of the stack.
   1. return data[top - 1]
4. `Length` → Return the length of the stack.
   1. return top
5. `isEmpty` → Check if the stack is empty.
   1. return top == 0
6. `Print` → Print the elements of the stack
   1. log all the elements in data array
