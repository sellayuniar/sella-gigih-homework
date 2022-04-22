import {render, screen} from "@testing-library/react";
import Search from "../Search";

test('Should show searchbar', () => {
    render(<Search handleOnChange={undefined} handleSearchOnSubmit={undefined} />);
    expect(screen.getByTestId("Search")).toBeInTheDocument()
})