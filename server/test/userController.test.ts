import { Request, Response } from 'express';
import { getUser, loginUser, createUser, editConfig, getWishlist, addToWishlist } from '../controller/user.controller';
import * as userModel from '../model/user.model';

// mmocking userModel modul
jest.mock('../model/user.model', () => ({
    getUser: jest.fn(),
    loginUser: jest.fn(),
    createUser: jest.fn(),
    editConfig: jest.fn(),
    getWishlist: jest.fn(),
    findOneAndUpdate: jest.fn(),
    addToWishlist: jest.fn(),
}));

describe('getUser Controller', () => {
    it('should return user data for valid user ID', async () => {
        (userModel.getUser as jest.Mock).mockResolvedValue({ id: '123', name: 'Test User' });

        const mockReq = { params: { userId: '123' } } as unknown as Request;
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        } as unknown as Response;

        await getUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.send).toHaveBeenCalledWith({ id: '123', name: 'Test User' });
    });
});

describe('loginUser Controller', () => {
    it('should login user with correct credentials', async () => {
        const mockUser = { username: 'test', password: 'pass' };
        const mockReq = { body: mockUser } as unknown as Request;
        const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() } as unknown as Response;

        jest.spyOn(userModel, 'loginUser').mockResolvedValue({ id: '123' } as any);

        await loginUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.send).toHaveBeenCalledWith({ userId: '123' });
    });

    it('should return error for invalid credentials', async () => {
        const mockUser = { username: 'test', password: 'wrongpass' };
        const mockReq = { body: mockUser } as unknown as Request;
        const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() } as unknown as Response;

        jest.spyOn(userModel, 'loginUser').mockResolvedValue(null);

        await loginUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.send).toHaveBeenCalledWith('username or password incorrect');
    });
});

describe('createUser Controller', () => {
    it('should create user', async () => {
        const mockUser = { username: 'test', password: 'pass' };
        const mockReq = { body: mockUser } as unknown as Request;
        const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() } as unknown as Response;

        jest.spyOn(userModel, 'createUser').mockResolvedValue({ id: '123' } as any);

        await createUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.send).toHaveBeenCalledWith({ userId: '123' });
    });

    it('should return error for invalid credentials', async () => {
        const mockUser = { username: 'test', password: 'wrongpass' };
        const mockReq = { body: mockUser } as unknown as Request;
        const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() } as unknown as Response;

        jest.spyOn(userModel, 'createUser').mockResolvedValue(null);

        await createUser(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.send).toHaveBeenCalledWith('user already exits');
    });
});

describe('editConfig Controller', () => {
    it('should update config for valid type', async () => {
        const mockReq = {
            params: { type: 'time' },
            body: { userId: '123', type: 'time', value: '10:00' },
        } as unknown as Request;
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        } as unknown as Response;

        jest.spyOn(userModel, 'editConfig').mockResolvedValue({ time: '10:00' } as any);

        await editConfig(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.send).toHaveBeenCalledWith({ time: '10:00' });
    });

    it('should return 400 for invalid type', async () => {
        const mockReq = {
            params: { type: 'invalidType' },
            body: { userId: '123', type: 'invalidType', value: 'someValue' },
        } as unknown as Request;
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        } as unknown as Response;

        await editConfig(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.send).toHaveBeenCalledWith('can not set this config');
    });

    it('should return 500 if config update fails', async () => {
        const mockReq = {
            params: { type: 'time' },
            body: { userId: '123', type: 'time', value: '10:00' },
        } as unknown as Request;
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        } as unknown as Response;

        jest.spyOn(userModel, 'editConfig').mockResolvedValue(null);

        await editConfig(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(500);
        expect(mockRes.send).toHaveBeenCalledWith('no se ha podido cambiar');
    });

});

describe('getWishlist Controller', () => {
    it('should return the wishlist saved user', async () => {
        (userModel.getWishlist as jest.Mock).mockResolvedValue({ id: '123' });

        const mockReq = { params: { userId: '123' } } as unknown as Request;
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        } as unknown as Response;

        jest.spyOn(userModel, 'getWishlist').mockResolvedValue({ id: '123' } as any);

        await getWishlist(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.send).toHaveBeenCalledWith({ id: '123' });
    });
});

describe('addToWishlist Controller', () => {
    it('should add to the wishlist saved user', async () => {
        const mockReq = { body: { id: 'someId', userId: '123' } } as unknown as Request;
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        } as unknown as Response;

        const mockWishlistRes = {
            wishlist: ['someId'],
            _id: '123'
        };

        jest.spyOn(userModel, 'addToWishlist').mockResolvedValue(mockWishlistRes as any);

        await addToWishlist(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.send).toHaveBeenCalledWith({
            _id: '123',
            wishlist: ['someId']
        });
    });
});