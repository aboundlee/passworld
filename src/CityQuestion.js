import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonSection = styled.div`
	margin: 30px 15px;
`;

const ButtonWrapper = styled.ul`
    margin: 0px;
    padding: 0px;
    display: flex;
    overflow-x: auto;
    flex-wrap: wrap;
`;


const CityButtonWrapper = styled.ul`
    margin: 0px;
    padding: 0px;
    overflow-x: auto;
`;

const SectionTitle = styled.div`
    font-size: 22px;
    font-weight: 700;
    line-height: 135%;
    color: #141719;
    padding: 16px 0px 16px 8px;
`;


const SectionTitleWithSub = styled.div`
    font-size: 22px;
    font-weight: 700;
    line-height: 135%;
    color: #141719;
    padding: 16px 0px 0px 8px;
`;

const SectionSubTitle = styled.div`
    font-size: 17px;
    font-weight: 500;
    line-height: 135%;
    color: #141719;
    padding: 6px 0px 16px 8px;
`;


const CityButton = styled.li`
    cursor: pointer;
    list-style: none;
    display: flex;
    flex: 0 0 auto;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 56px;
    margin: 5px 3px;

    white-space: nowrap; /* 자동 줄바꿈 방지 */
    overflow: hidden; /* 초과 내용 감춤 */
    text-overflow: ellipsis; /* 초과 내용 생략 기호(...)로 표시 */

    padding: 8px 14px;
    border-radius: 20px;
    font-size: 15px;
    line-height: 138%;
    font-weight: 600;
    // background-color: #141719;
    // color: #ffffff;
    background-color: #f8f9fa;
    color: #141719;

    background-color: ${props => (props.isSelected ? '#141719' : '#f8f9fa')};
    color: ${props => (props.isSelected ? '#ffffff' : '#141719')};
    transition: background-color 0.2s ease-out, color 0.2s ease-out;


    outline: none;
    box-sizing: border-box;
    letter-spacing: 0px;
    -webkit-font-smoothing: antialiased;
    overflow-anchor: none;
`;


const SelectButton = styled.li`
    cursor: pointer;
    list-style: none;
    display: flex;
    flex: 0 0 auto;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 40px;
    margin: 5px 3px;

    white-space: nowrap; /* 자동 줄바꿈 방지 */
    overflow: hidden; /* 초과 내용 감춤 */
    text-overflow: ellipsis; /* 초과 내용 생략 기호(...)로 표시 */

    padding: 8px 14px;
    border-radius: 20px;
    font-size: 15px;
    line-height: 138%;
    font-weight: 600;
    // background-color: #141719;
    // color: #ffffff;
    background-color: #f8f9fa;
    color: #141719;

    background-color: ${props => (props.isSelected ? '#141719' : '#f8f9fa')};
    color: ${props => (props.isSelected ? '#ffffff' : '#141719')};
    transition: background-color 0.2s ease-out, color 0.2s ease-out;


    outline: none;
    box-sizing: border-box;
    letter-spacing: 0px;
    -webkit-font-smoothing: antialiased;
    overflow-anchor: none;
`;




function CityQuestion({selectedButtons, setSelectedButtons}) {
    const handleClick = (event) => {
        const buttonName = event.target.textContent;
        if (selectedButtons.includes(buttonName)) {
          // 버튼을 누른 적이 있다면, 선택된 버튼들에서 제거합니다.
          setSelectedButtons(selectedButtons.filter((name) => name !== buttonName));
        } else {
          // 버튼을 누른 적이 없다면, 선택된 버튼들에 추가합니다.
          setSelectedButtons([...selectedButtons, buttonName]);
        }
      };

	return (
		<Wrapper>
            <ButtonSection> 
            <SectionTitleWithSub>
                방문하실 지역을<br/>모두 선택해주세요
            </SectionTitleWithSub>
            <SectionSubTitle>
                각 지역에 맞게 추천해드릴게요
            </SectionSubTitle>
            <div>
                <CityButtonWrapper> 
                    <CityButton onClick={handleClick} isSelected={selectedButtons.includes('오사카 시내')}>오사카 시내</CityButton>
                    <CityButton onClick={handleClick} isSelected={selectedButtons.includes('교토')}>교토</CityButton>
                    <CityButton onClick={handleClick} isSelected={selectedButtons.includes('고베')}>고베</CityButton>
                    <CityButton onClick={handleClick} isSelected={selectedButtons.includes('나라')}>나라</CityButton>

                </CityButtonWrapper>
            </div>
            </ButtonSection> 


		</Wrapper>


	)


}

export default React.memo(CityQuestion);

