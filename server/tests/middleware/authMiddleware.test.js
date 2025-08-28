const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

describe('authMiddleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      header: jest.fn()
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  it('should call next if token is valid', () => {
    // Arrange
    req.header.mockReturnValue('Bearer validToken');
    jwt.verify = jest.fn().mockReturnValue({ userId: '123' });

    // Act
    authMiddleware(req, res, next);

    // Assert
    expect(jwt.verify).toHaveBeenCalledWith('validToken', undefined);
    expect(req.user).toEqual({ userId: '123' });
    expect(next).toHaveBeenCalled();
  });

  it('should return 401 if token is missing', () => {
    // Arrange
    req.header.mockReturnValue(null);

    // Act
    authMiddleware(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Access denied. No token provided.',
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('should return 401 if token is expired', () => {
    // Arrange
    const expiredError = new jwt.JsonWebTokenError('jwt expired');
    req.header.mockReturnValue('Bearer invalidToken');
    jwt.verify = jest.fn().mockImplementation(() => { throw expiredError; });

    // Act
    authMiddleware(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Token expired. Please log in again.',
    });
  });

  it('should return 401 if token has invalid format', () => {
    // Arrange
    const malformedError = new jwt.JsonWebTokenError('invalid token');
    req.header.mockReturnValue('Bearer invalidToken');
    jwt.verify = jest.fn().mockImplementation(() => { throw malformedError; });

    // Act
    authMiddleware(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Invalid token format.',
    });
  });

  it('should return 401 if token is not yet active (nbf)', () => {
    // Arrange
    const nbfError = new jwt.NotBeforeError('token not active', new Date());
    req.header.mockReturnValue('Bearer validToken');
    jwt.verify = jest.fn().mockImplementation(() => { throw nbfError; });

    // Act
    authMiddleware(req, res, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Token not yet valid.',
    });
  });

  it('should return 401 for unknown JWT errors', () => {
    // Arrange
    const genericError = new Error('Unknown error');
    req.header.mockReturnValue('Bearer validToken');
    jwt.verify = jest.fn().mockImplementation(() => { throw genericError; });

    // Act
    authMiddleware(req, res, next);

    // Assert
    expect(console.error).toHaveBeenCalledWith('JWT Error:', genericError.message);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Authentication failed.',
    });
  });
});