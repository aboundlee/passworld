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


function OsakaQuestion({selectedButtons, setSelectedButtons}) {



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
				<SectionTitle>
					방문할 관광지를 선택해주세요
				</SectionTitle>

				<div>
					<ButtonWrapper> 
                    
                        <SelectButton onClick={handleClick} isSelected={selectedButtons.includes('오사카성')}>오사카성</SelectButton>
                        <SelectButton onClick={handleClick} isSelected={selectedButtons.includes('도톤보리 리버크루즈')}>도톤보리 리버크루즈</SelectButton>
                        <SelectButton onClick={handleClick} isSelected={selectedButtons.includes('덴노지 동물원')}>덴노지 동물원</SelectButton>
                        <SelectButton onClick={handleClick} isSelected={selectedButtons.includes('츠텐카쿠 전망대')}>츠텐카쿠 전망대</SelectButton>
                        <SelectButton onClick={handleClick} isSelected={selectedButtons.includes('오사카 주택박물관')}>오사카 주택박물관</SelectButton>
                        <SelectButton onClick={handleClick} isSelected={selectedButtons.includes('덴포잔 관람차')}>덴포잔 관람차</SelectButton>
                        <SelectButton onClick={handleClick} isSelected={selectedButtons.includes('우메다 스카이빌딩 공중정원')}>우메다 스카이빌딩 공중정원</SelectButton>
                        <SelectButton onClick={handleClick} isSelected={selectedButtons.includes('햅파이브 대관람차')}>햅파이브 대관람차</SelectButton>
                        <SelectButton onClick={handleClick} isSelected={selectedButtons.includes('시텐노지 사원')}>시텐노지 사원</SelectButton>
                        <SelectButton onClick={handleClick} isSelected={selectedButtons.includes('레고랜드 디스커버리 센터')}>레고랜드 디스커버리 센터</SelectButton>					
					</ButtonWrapper>
				</div>
			</ButtonSection> 


		</Wrapper>


	)


}

export default React.memo(OsakaQuestion);

