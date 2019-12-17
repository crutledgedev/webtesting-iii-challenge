// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';

test("Controls renders without crashing", () => {
    render(<Controls/>);
});

test('Toggle States', () => {
    const locked = false;
    const closed = true;
    const toggleLocked = true;
    const toggleClosed = true;
    const tree = render(<Controls
        locked = {locked}
        closed = {closed}
        toggleLocked = {toggleLocked}
        toggleClosed = {toggleClosed}
        />
        )
        expect(tree.baseElement).toMatchSnapshot()
})