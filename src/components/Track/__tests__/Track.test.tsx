import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Track from '../Track';
import store from "../../../store";
// import data from "../../../libs/data/tracksData"


test("should show track component", () => {
     render(
        <Provider store={store}>
            <Track mergedTracks={[]} handleSelectTrack={function (uri: string): void {
                 throw new Error('Function not implemented.');
             } }  />
        </Provider>
        );
        const trackDisplay = screen.getByTestId("Track");
        expect(trackDisplay).toBeInTheDocument();
})
