function solve(input) {
  let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  let validUriRegEx = /^[\w.]+$/;
  let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let invalidMessRegex = /[<>\\&'"]/;
  if (!validMethods.includes(input.method) || !input.hasOwnProperty("method")) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (!validUriRegEx.test(input.uri) || !input.hasOwnProperty("uri")) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (
    !validVersions.includes(input.version) ||
    !input.hasOwnProperty("version")
  ) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (
    invalidMessRegex.test(input.message) ||
    !input.message === "" ||
    !input.hasOwnProperty("message")
  ) {
    throw new Error("Invalid request header: Invalid Message");
  }
  return input;
}
console.log(
  solve({
    method: "OPTIONS",
    uri: "git.master",
    version: "HTTP/1.1",
    message: "-recursive",
  })
);
