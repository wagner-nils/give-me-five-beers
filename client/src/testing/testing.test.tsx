import {describe, expect, test} from 'vitest';
import WelcomePage from '../pages/WelcomePage'
import {render, screen} from '@testing-library/react';
import { beforeEach } from 'node:test';
import '@testing-library/jest-dom'




describe("WelcomePage", () => {
    beforeEach(() => {
        const rend = render(<WelcomePage/>);
        console.log("render: ", rend)
    });


    test("Should render buttons", () => {
        const altText = screen.getByAltText("good beer is good")
        expect(altText).toBeInTheDocument() 
    })
    })