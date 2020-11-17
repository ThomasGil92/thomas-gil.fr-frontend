/* import React, { useEffect } from 'react';
import { shallow, mount } from 'enzyme';
import 'cross-fetch/polyfill'
import ApolloBoost, { gql } from 'apollo-boost'
import { act } from "react-dom/test-utils";
import Home from './pages/Home'
import HomeHeader from './pages/Home/HomeHeader'

/* const client=new ApolloBoost({
  uri:'http://localhost:8000'
})

it("Should create new site",async()=>{
  const siteCreate=gql`
  mutation{
    siteCreate(
      input:{
        title:"dsdg",
        description:"dsfdffsf",
        url:"sifdsifj.com"
      }
    ){
      title
    }
  }`
  const response=await client.mutate({
    mutation:siteCreate
  })

describe('HomeHeader', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<HomeHeader />)
  })
})


describe('Home', () => {
  let useEffect
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
    mockUseEffect();
    mockUseEffect();
  })
  test('handles groupId and api call ', () => {
    jest.fn()
    const wrapper = shallow(<Home />);
    console.log(wrapper.debug())
    expect(window.sessionStorage.setItem).toHaveBeenCalledTimes(1)
    // expect(wrapper.text()).toBe("Développeur Web Fullstack")
    //expect(wrapper.find('#homeHeader')).toBe("Développeur Web Fullstack");
  })

  /*  it('Should render PublicNav', () => {
     expect(wrapper.find('PublicNav')).toHaveLength(1)
   })
   it('Should render HomeIntro', () => {
     expect(wrapper.find('HomeIntro')).toHaveLength(1)
   })
   it('Should render HomePresentation', () => {
     expect(wrapper.find('HomePresentation')).toHaveLength(1)
   })
   it('Should render LastProjects', () => {
     expect(wrapper.find('LastProjects')).toHaveLength(1)
   })
   it('Should render Footer', () => {
     expect(wrapper.find('Footer')).toHaveLength(1)
   }) 
})
 */