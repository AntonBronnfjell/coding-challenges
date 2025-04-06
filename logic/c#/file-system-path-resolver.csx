/////////////////////////////////////////////////////
//// Coding Challenge: File System Path Resolver ////
/////////////////////////////////////////////////////

/// Dificulty: Medium - Hard
/// Problem Statement
//
// Write a method that resolves a simplified
// Unix-like file system path and returns its
// canonical (absolute) version.
//
// A path may include:
//	•	"." – current directory
//	•	".." – parent directory
//  •	Multiple slashes (e.g., //) which
//      should be treated as a single /
//
// Constraints
//	•	Only valid characters are lowercase
//      letters, /, ., and ..
//	•	You can assume the input always
//      starts with / (i.e., it’s absolute)
//	•	Do not use built-in libraries like
//      Path.GetFullPath() – implement logic
//      yourself using stack operations.

using System;

static string SimplifyPath(string path)
{

}

SimplifyPath("/home/");                // "/home"
SimplifyPath("/a/./b/../../c/");       // "/c"
SimplifyPath("/../");                  // "/"
SimplifyPath("/home//foo/");           // "/home/foo"
SimplifyPath("/a//b////c/d//././/.."); // "/a/b/c"