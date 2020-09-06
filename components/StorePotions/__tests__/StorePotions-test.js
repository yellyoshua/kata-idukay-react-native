import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import StorePotions from '../StorePotionsComponent';

describe("unit test store-potions component",() => {

  const player = {name: "test",alias: "test-dev", avatar: "/my-icon.jpg"};
  const potions= {
    red: "True love!",
    blue: "False illusions",
    green: "Fake friends",
    yellow: "Blessed ignorance",
    gray: "Defame"
  };

  it(`renders correctly`, () => {
    const resetPlayer = jest.fn();
    const store = renderer.create(<StorePotions player={player} resetPlayer={resetPlayer}/>).toJSON();

    expect(store).toMatchSnapshot();
  });

  it("Be rendered all potions",() => {
    const resetPlayer = jest.fn();
    const {getByText} = render(<StorePotions player={player} resetPlayer={resetPlayer}/>);
  
    expect(getByText(potions.red)).toBeTruthy();
    expect(getByText(potions.blue)).toBeTruthy();
    expect(getByText(potions.green)).toBeTruthy();
    expect(getByText(potions.yellow)).toBeTruthy();
    expect(getByText(potions.gray)).toBeTruthy();
  });

  it(`Case 1`, () => {
    const resetPlayer = jest.fn();
    const {getByText} = render(<StorePotions player={player} resetPlayer={resetPlayer}/>);
  
    fireEvent.press(getByText(potions.red));
    fireEvent.press(getByText(potions.red));
    fireEvent.press(getByText(potions.blue));
    fireEvent.press(getByText(potions.green));

    fireEvent.press(getByText("Attack"));

    expect(getByText("Ataque 1: usar 3  pociones  distintas  causan  un 10% de daño.")).toBeTruthy();
    expect(getByText("Ataque 2: usar una  poción  causa  un 3% de daño.")).toBeTruthy();
    expect(getByText(`Total: ${player.name} ha causado un 13% de daño.`)).toBeTruthy();
    
    fireEvent.press(getByText("Reset"));

    expect(resetPlayer).toBeCalledWith(null);
  });

  it(`Case 2`, () => {
    const resetPlayer = jest.fn();
    const {getByText} = render(<StorePotions player={player} resetPlayer={resetPlayer}/>);
  
    fireEvent.press(getByText(potions.red));
    fireEvent.press(getByText(potions.red));
    fireEvent.press(getByText(potions.blue));
    fireEvent.press(getByText(potions.blue));
    fireEvent.press(getByText(potions.green));
    fireEvent.press(getByText(potions.yellow));
    fireEvent.press(getByText(potions.gray));

    fireEvent.press(getByText("Attack"));

    expect(getByText("Ataque 1: usar 5  pociones  distintas  causan  un 25% de daño.")).toBeTruthy();
    expect(getByText("Ataque 2: usar una  poción  causa  un 3% de daño.")).toBeTruthy();
    expect(getByText("Ataque 3: usar una  poción  causa  un 3% de daño.")).toBeTruthy();
    expect(getByText(`Total: ${player.name} ha causado un 31% de daño.`)).toBeTruthy();
    
    fireEvent.press(getByText("Reset"));

    expect(resetPlayer).toBeCalledWith(null);
  });

  it(`Case 3`, () => {
    const resetPlayer = jest.fn();
    const {getByText} = render(<StorePotions player={player} resetPlayer={resetPlayer}/>);
  
    fireEvent.press(getByText(potions.red));
    fireEvent.press(getByText(potions.red));
    fireEvent.press(getByText(potions.blue));
    fireEvent.press(getByText(potions.blue));
    fireEvent.press(getByText(potions.green));
    fireEvent.press(getByText(potions.green));
    fireEvent.press(getByText(potions.yellow));
    fireEvent.press(getByText(potions.gray));

    fireEvent.press(getByText("Attack"));

    expect(getByText("Ataque 1: usar 5  pociones  distintas  causan  un 25% de daño.")).toBeTruthy();
    expect(getByText("Ataque 2: usar 2  pociones  distintas  causan  un 5% de daño.")).toBeTruthy();
    expect(getByText("Ataque 3: usar una  poción  causa  un 3% de daño.")).toBeTruthy();
    expect(getByText(`Total: ${player.name} ha causado un 33% de daño.`)).toBeTruthy();
    
    fireEvent.press(getByText("Reset"));

    expect(resetPlayer).toBeCalledWith(null);
  });
})
