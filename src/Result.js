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




function Result({selectedButtons, setSelectedButtons}) {
    

	return (
		<Wrapper>
            <ButtonSection> 
            <SectionTitleWithSub>
                오사카 주유패스 1일권으로<br/>21,000원을 아낄 수 있어요!
            </SectionTitleWithSub>
            <SectionSubTitle>
            오사카 주유패스는 4번이상 가면 이득이에요. ~~
            </SectionSubTitle>

            <SectionTitleWithSub>
                왜 더 저렴한걸까요?
            </SectionTitleWithSub>
            <SectionSubTitle>
            선택하신 오사카 관람차 (5500엔)+오사카 관람차 (5500엔)+오사카 관람차 (5500엔), 그리고 지하철은 최소 3번 이용하게 돼요.
            그렇게 계산하면 총 15500엔 이지만, 오사카 주유패스 1일권으로 사면 2500엔으로 이 모든 것을 누릴 수 있어요! 
            </SectionSubTitle>
            </ButtonSection> 


		</Wrapper>


	)


}

export default React.memo(Result);

