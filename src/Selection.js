import React from 'react';
//{ useState, useEffect } from 'react';
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
    flex-wrap: nowrap;
    overflow-x: auto;
`;

const SectionTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 135%;
    color: #141719;
    padding: 16px 0px 16px 8px;
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
    height: 40px;
    margin: 0 3px;

    white-space: nowrap; /* 자동 줄바꿈 방지 */
    overflow: hidden; /* 초과 내용 감춤 */
    text-overflow: ellipsis; /* 초과 내용 생략 기호(...)로 표시 */

    padding: 8px 14px;
    border-radius: 20px;
    font-size: 15px;
    line-height: 138%;
    font-weight: 600;
    background-color: #141719;
    color: #ffffff;

    outline: none;

    font-family: "SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    letter-spacing: 0px;
    -webkit-font-smoothing: antialiased;
    overflow-anchor: none;
`;


function Selection() {

	return (
		<Wrapper>
			<ButtonSection> 
				<SectionTitle>
					방문하실 지역을 선택해주세요
				</SectionTitle>
				<div>
					<ButtonWrapper> 
						<CityButton>오사카</CityButton> 
						<CityButton>교토</CityButton> 
						
						
					</ButtonWrapper>
				</div>
			</ButtonSection> 
			<ButtonSection> 
				<SectionTitle>
					방문할 관광지를 선택해주세요
				</SectionTitle>
				<div>
					<ButtonWrapper> 
						<CityButton>오사카</CityButton> 
						<CityButton>교토</CityButton> 
						
						
					</ButtonWrapper>
				</div>
			</ButtonSection> 
		</Wrapper>

	)


}

export default React.memo(Selection);
