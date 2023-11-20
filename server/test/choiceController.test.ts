import { Request, Response } from "express";
import * as ChoiceModel from "../model/choice.model";
import { postBeerOption } from "../controller/choice.controller";

// mmocking ChoiceModel modul
jest.mock("../model/choice.model", () => ({
    postBeerOption: jest.fn(),
}));

describe("postBeerOption Controller", () => {
    it("should post beer option for valid user ID", async () => {
        const mockReq = {
            params: { type: "bar" },
            body: { userId: "123", choiceId: "456" },
        } as unknown as Request;
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        } as unknown as Response;

        jest.spyOn(ChoiceModel, "postBeerOption").mockResolvedValue({ id: "123" } as any);

        await postBeerOption(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.send).toHaveBeenCalledWith({ id: "123" });
    });

    it("should return error for invalid user ID", async () => {
        const mockReq = {
            params: { type: "bar" },
            body: { userId: "123", choiceId: "456" },
        } as unknown as Request;
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        } as unknown as Response;

        jest.spyOn(ChoiceModel, "postBeerOption").mockResolvedValue(null);

        await postBeerOption(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.send).toHaveBeenCalledWith("only one drink per day");
    });

    it("should return error for invalid type", async () => {
        const mockReq = {
            params: { type: "cafe" }, // Use an invalid type like 'cafe'
            body: { userId: "123", choiceId: "456" },
        } as unknown as Request;
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        } as unknown as Response;

        jest.spyOn(ChoiceModel, "postBeerOption").mockResolvedValue(null);

        await postBeerOption(mockReq, mockRes);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.send).toHaveBeenCalledWith("not the right type of drink");
    });
});