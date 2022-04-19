import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Track from '../Track';
import store from "../../../store";


test("should show track component", () => {
     render(
        <Provider store={store}>
            <Track mergedTracks={[]} handleSelectTrack={function (uri: string): void {
                throw new Error('Function not implemented.');
            } } />
        </Provider>
        );
        expect(screen.getByTestId("track")).toBeInTheDocument();
})
