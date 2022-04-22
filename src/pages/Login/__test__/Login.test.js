import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Login";

test('Should bring to another page', () => {
    render(<Login />);
    const login = screen.getByTestId("login");
    userEvent.click(login);
  
    expect(screen.getByTestId("login")).toBeInTheDocument();
})