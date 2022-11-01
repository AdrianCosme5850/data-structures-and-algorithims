# Hashtables

## Challenge

I needed to create methods that would allow a hash table to set values, retrieve values, return booleans, and return keys from the hashtable. I then had to write tests proving the efficacy of those methods.

## Approach and Efficiency

I used a variety of for loops for all of the methods. Each of these methods has an O(N) for speed. The rest have an O(1) for memory except the has method which is O(n). I had to create a guard if statement for most of them to prevent a runtime error from occuring in the empty values.

## API

The publicly available methods I use were from mozilla docs for the for of loops, and the greater than or equal to method in the Jest documentation.

Mozilla: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
Jest: https://jestjs.io/docs/expect
