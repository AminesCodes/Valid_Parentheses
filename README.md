# Valid Parentheses

Given a string containing just the characters `'(', ')', '{', '}', '[' and ']'`, determine if the input string is valid.
```
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
**Note** that an **empty string** is also considered **valid**.
```
```js
//Example 1:
Input: "()"
Output: true
```
```js
//Example 2:
Input: "()[]{}"
Output: true
```
```js
//Example 3:
Input: "(]"
Output: false
```
```js
//Example 4:
Input: "([)]"
Output: false
```
```js
//Example 5:
Input: "{[]}"
Output: true
```