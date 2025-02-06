# MongoDB $inc Operator Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries.  The error occurs when attempting to increment a field with a string value instead of a number.  The solution shows the correct way to use the `$inc` operator.

## Bug
The original code incorrectly uses a string ('1') for the increment value. This leads to a MongoDB error.

## Solution
The solution demonstrates the correct usage of the `$inc` operator, using a numerical value (1) for the increment.