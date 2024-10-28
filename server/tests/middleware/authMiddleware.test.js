const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

describe('authMiddleware', () => {
  it('should call next if token is valid', () => {
    const req = {
      header: jest.fn().mockReturnValue('Bearer validToken'),
    };
    const res = {};
    const next = jest.fn();

    jwt.verify = jest.fn().mockReturnValue({ userId: '123' });

    authMiddleware(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(req.user).toEqual({ userId: '123' });
  });

  it('should return 401 if token is missing', () => {
    const req = { header: jest.fn().mockReturnValue(null) };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Access denied. No token provided.' });
  });

  it('should return 401 if token is invalid', () => {
    const req = { header: jest.fn().mockReturnValue('Bearer invalidToken') };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    jwt.verify = jest.fn().mockImplementation(() => { throw new Error('Invalid token'); });

    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid token.' });
  });
});
