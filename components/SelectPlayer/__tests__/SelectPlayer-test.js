import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import SelectPlayer from '../SelectPlayerComponent';

describe("unit test select-player component",() => {

  it(`renders correctly`, () => {
    const setPlayer = jest.fn();
    const player = renderer.create(<SelectPlayer setPlayer={setPlayer}/>).toJSON();

    expect(player).toMatchSnapshot();
  });

  it("Be rendered all players",() => {
    const setPlayer = jest.fn();
    const {getByText} = render(<SelectPlayer setPlayer={setPlayer}/>);
  
    expect(getByText("Thor")).toBeTruthy();
    expect(getByText("Wonder Woman")).toBeTruthy();
    expect(getByText("Smurf")).toBeTruthy();
    expect(getByText("Wizard Original")).toBeTruthy();
  });

  it(`Thor be selected`, () => {
    const setPlayer = jest.fn();
    const {getByText} = render(<SelectPlayer setPlayer={setPlayer}/>);
  
    fireEvent.press(getByText("Thor"));
  
    expect(setPlayer).toBeCalledWith({
      alias: "thor",
      avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/avatars/thor.png",
      name: "Thor"
    });
  });

  it(`Wonder Woman be selected`, () => {
    const setPlayer = jest.fn();
    const {getByText} = render(<SelectPlayer setPlayer={setPlayer}/>);
  
    fireEvent.press(getByText("Wonder Woman"));
  
    expect(setPlayer).toBeCalledWith({
      alias: "wonder-woman",
      avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/avatars/wonder-woman.png",
      name: "Wonder Woman"
    });
  });

  it(`Smurf be selected`, () => {
    const setPlayer = jest.fn();
    const {getByText} = render(<SelectPlayer setPlayer={setPlayer}/>);
  
    fireEvent.press(getByText("Smurf"));
  
    expect(setPlayer).toBeCalledWith({
      alias: "smurf",
      avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/avatars/smurf.png",
      name: "Smurf"
    });
  });

  it(`Wizard Original be selected`, () => {
    const setPlayer = jest.fn();
    const {getByText} = render(<SelectPlayer setPlayer={setPlayer}/>);
  
    fireEvent.press(getByText("Wizard Original"));
  
    expect(setPlayer).toBeCalledWith({
      alias: "wizard-original",
      avatar: "https://raw.githubusercontent.com/yellyoshua/kata-idukay-react/master/src/icons/avatars/wizard-original.png",
      name: "Wizard Original"
    });
  });
})
