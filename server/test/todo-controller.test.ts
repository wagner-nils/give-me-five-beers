// TODO Happy route: tests for expected input
import { Request, Response } from 'express';
import * as todoModel from '../model/todo.model';
import { getTodo, postTodo, markTodo } from '../controller/todo.controller';

jest.mock('../model/todo.model', () => ({
    getTodo: jest.fn(),
    postTodo: jest.fn(),
    markTodo: jest.fn()
}))

describe ('getTodo controller', () => {
    const date = new Date();
    (todoModel.getTodo as jest.Mock).mockResolvedValue({user: '1234', todo: '123'})

    const mockReq = {params: {userId: '1234'}} as unknown as Request;
    const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
    } as unknown as Response;
    
    it('should respond with status code 200', async () => {
        await getTodo(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
    })

    it('should respond with todo', async () => {
        await getTodo(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith({user: '1234', todo: '123'})
    })
})

describe ('postTodo controller', () => {
    const date = new Date();
    (todoModel.postTodo as jest.Mock).mockResolvedValue({user: '1234', date: date, todo: '123'})

    const mockReq = {body: {user: '1234', date: date, todo: '123'}} as unknown as Request;
    const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
    } as unknown as Response;

    it('should respond with status code 201', async () => {
        await postTodo(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(201);
    })

    it('should respond with the todo', async () => {
        await postTodo(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith({user: '1234', date: date, todo: '123'})   
    }) 
})

describe ('markTodo controller', () => {
    const date = new Date();
    (todoModel.markTodo as jest.Mock).mockResolvedValue({todoId: '1234', type: 'completed'})

    const mockReq = {
        params: {
            todoId: '1234', 
            type: 'not completed'
        }} as unknown as Request;
    const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
    } as unknown as Response;

    it('should respond with status code 200', async () => {
        await markTodo(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
    })
    
    it('should respond with updated model return value', async () => {
        await markTodo(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith({todoId: '1234', type: 'completed'})
    
    })
})