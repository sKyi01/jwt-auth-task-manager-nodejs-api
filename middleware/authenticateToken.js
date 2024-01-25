const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.header('Authorization');

  console.log("Your token", authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ error: 'Access denied. Token is missing or invalid.' });
  }

  // Extract the token without the "Bearer " prefix
  const token = authHeader.split(' ')[1];

  try {
    console.log("Decode code up");

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decode code below", decoded);
    req.user = decoded;
    console.log("Decode code last", req.user);

    next();
  } catch (error) {
    console.error('Token Verification Error:', error.message);
    res.status(401).json({ error: 'Invalid token.' });
  }
};

module.exports = authenticateToken;
