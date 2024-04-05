// AAA
// Arrange
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';
import SocialMedia from "../../../../pages/UnitTestingDemoPage/SocialMedia";

// Group of related tests == TEST SUITE
describe("SocialMedia", () => {
  // Act
  // TESTING JSX
  it("has Social Media in heading", () => {
    render(<SocialMedia name="Instagram" followersCount="1.2M+" />);
    const headingElement = screen.getByText(/social media info/i); // using regex here
    // Assert
    expect(headingElement).toBeDefined();
  });

  // Testing Props
  it("receives the props name, followersCount and displays in paragraph", () => {
    render(<SocialMedia name="Instagram" followersCount="700K+" />);

    const followersDetailsElement = screen.getByTestId("followersDetails");
    // Instagram with 700K+ followers
    expect(followersDetailsElement.textContent).toBe(
      "Instagram with 700K+ followers"
    );
  });

  // Testing whether the form element is present or not
  it("should have input field with placeholder 'Enter Country Name'", () => {
    render(<SocialMedia name="YouTube" followersCount="500K+" />);
    const countryInput = screen.getByPlaceholderText("Enter Country Name");
    expect(countryInput).toBeTruthy();
  });

  // Testing input field's default value 
  it("should have input field with default value India", () => {
    render(<SocialMedia name="YouTube" followersCount="500K+" />);
    // find the element in which you have on change event
    const countryInput: HTMLInputElement = screen.getByRole("textbox");

    // let's test whether the input has default text
    expect(countryInput.value).toBe("India");
  });

  // Testing Events and States
  it('should update country name whenever the input field value is changed', () => {
    render(<SocialMedia name="YouTube" followersCount="500K+" />);
    // find the element in which you have on change event
    const countryInput: HTMLInputElement = screen.getByRole("textbox");

    // through program let's trigger the event -- because we can't use our input devices such as mouse, keyboard
    // having mock event obj
    // Triggering / emitting / firing event through program
    fireEvent.change(countryInput, {
      target: {
        value: 'Singapore'
      }
    });
    // assert 
    expect(countryInput.value).toBe('Singapore');
     
    const websiteInfoElement = screen.getByTestId('websiteInfo');
    expect(websiteInfoElement.textContent).toBe('Visit Genesys Singapore Website');
  });

  // Testing inline Styles
  it("displays social media followers count with background color yellow ", () => {
    render(<SocialMedia name="YouTube" followersCount="500K+" />);
    const followersDetailsElement = screen.getByTestId("followersDetails");
    expect(followersDetailsElement).toHaveStyle("background-color: #ffff00");
  });

  // TODO: Testing whether the element element has some css class

  // Snapshot Testing 
  it('has right SocialMedia component snapshot', () => {
    // to Take snapshot we need -- npm i react-test-renderer 
    // [RECOMMENDED: Take snapshot with all possible props as well props children]
    const snapshotJson = renderer.create(<SocialMedia name="YouTube" followersCount="500K+" />);
    // assert
    expect(snapshotJson).toMatchSnapshot();
  });
});
