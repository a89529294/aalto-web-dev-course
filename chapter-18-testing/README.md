# Testing

`deno test`

## Unit Test

By default, Deno identifies test files based on the file names. If the name of a file ends with test.js, Deno assumes that the file contains tests. If we use the naming convention, we do not have to the file for which the tests should be run. Instead, we can just run the test command and Deno finds the test files for us.

`deno test --coverage=test_cov`
produces coverage info in the folder test_cov

`deno coverage test_cov` outputs test coverage info
`deno coverage test_cov --detailed`

## Integration Test

One approach for integration testing in web applications is testing the HTTP interfaces that the applications provide. Effectively, this means making queries to the application, and verifying that the responses are as expected.
