# Unexpected Type Error with 'undefined' and 'null' in TypeScript

This repository demonstrates a common yet subtle error in TypeScript related to the handling of 'null' and 'undefined' types.  TypeScript's type system distinguishes between 'null' and 'undefined', and doesn't automatically treat 'undefined' as a subtype of 'null'.  This can result in type errors that aren't immediately obvious.

## The Problem

The `bug.ts` file contains a function that accepts a string or null (`string | null`). However, passing 'undefined' to this function results in a compilation error, even though it might seem logically acceptable in some contexts. 

## The Solution

The `bugSolution.ts` file shows how to solve this by explicitly including 'undefined' in the type definition, using the union type `string | null | undefined`.