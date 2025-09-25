const fakeUser = {
  name: "John Doe",
  email: "john@example.com"
};

// Simulate getting a token from backend
async function loginViaApi() {
  // Fake JWT: header.payload.signature
  const base64Payload = Buffer.from(JSON.stringify(fakeUser)).toString('base64');
  const fakeToken = `header.${base64Payload}.signature`;

  return fakeToken;
}

module.exports = { loginViaApi };
