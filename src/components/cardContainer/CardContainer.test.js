import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer Test', () => {

  it.skip('should receive props', () => {
    const mockFunc = jest.fn();
    const mockData = [
      {
        homeworld: "Tatooine", 
        name: "Darth Vader", 
        species: "Human", 
        population: "200000"
     }
    ]
    const mockLocation = 'people';
    const mockFavs = [];
    const renderedContainer = mount(
      <CardContainer 
        itemData={mockData} 
        location={mockLocation} 
        updateFavorite={mockFunc} 
        favorites={mockFunc}
      />);

    expect(renderedContainer.props().itemData).toEqual(mockData);
    expect(renderedContainer.props().location).toEqual(mockLocation)
    expect(renderedContainer).props().updateFavorite.toEqual(mockFunc)
    expect(renderedContainer.props().favorites).toEqual(mockFavs)
  });

  it.skip('should match snapShot of CardContainer', () => {
    const mockFunc = jest.fn();
    const mockData = [
      {
        homeworld: "Tatooine", 
        name: "Darth Vader", 
        species: "Human", 
        population: "200000"
     }
    ]
    const mockLocation = 'people';
    const mockFavs = [];
    const renderedContainer = mount(
      <CardContainer 
        itemData={mockData} 
        location={mockLocation} 
        updateFavorite={mockFunc} 
        favorites={mockFunc}
      />);

    expect(renderedContainer).toMatchSnapshot();
  })
});
