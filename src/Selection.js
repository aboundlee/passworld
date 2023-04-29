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
    font-family: "SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    letter-spacing: 0px;
    -webkit-font-smoothing: antialiased;
    overflow-anchor: none;
`;

const NextWrpper = styled.div`
position: fixed;
left: 0px;
right: 0px;
bottom: 20px;
margin: 0px auto;
padding: 0px 10px;
  max-width: 480px;

`;
const NextButton = styled.button`
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1.25;
    border: 1px solid rgb(86, 111, 238);
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    height: 48px;
    font-size: 14px;
    padding: 0px 14px;
    background-color: #141719;
    color: #ffffff;
    font-weight: 700;
    opacity: ${props => (props.hasSelection > 0? 1 : 0)}; 
    pointer-events: ${props => (props.hasSelection > 0 ? 'auto' : 'none')}; /* pointer-events 속성 추가 */


    transition: opacity 0.25s ease-in-out; /* opacity 속성만 transition 적용 */

    outline: none;

`;


function Selection() {
    
    const [selectedButtons, setSelectedButtons] = useState([]);
    const hasSelection = selectedButtons.length > 0;


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
					방문하실 지역을 선택해주세요
				</SectionTitle>
				<div>
					<ButtonWrapper> 
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('오사카 시내')}>오사카 시내</CityButton>
						<CityButton onClick={handleClick} isSelected={selectedButtons.includes('교토')}>교토</CityButton>
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('고베')}>고베</CityButton>
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('나라')}>나라</CityButton>

					</ButtonWrapper>
				</div>
			</ButtonSection> 
			<ButtonSection> 
				<SectionTitle>
					방문할 관광지를 선택해주세요
				</SectionTitle>
				<div>
					<ButtonWrapper> 
                    
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('오사카성')}>오사카성</CityButton>
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('도톤보리 리버크루즈')}>도톤보리 리버크루즈</CityButton>
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('덴노지 동물원')}>덴노지 동물원</CityButton>
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('츠텐카쿠 전망대')}>츠텐카쿠 전망대</CityButton>
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('오사카 주택박물관')}>오사카 주택박물관</CityButton>
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('덴포잔 관람차')}>덴포잔 관람차</CityButton>
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('우메다 스카이빌딩 공중정원')}>우메다 스카이빌딩 공중정원</CityButton>
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('햅파이브 대관람차')}>햅파이브 대관람차</CityButton>
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('시텐노지 사원')}>시텐노지 사원</CityButton>
                        <CityButton onClick={handleClick} isSelected={selectedButtons.includes('레고랜드 디스커버리 센터')}>레고랜드 디스커버리 센터</CityButton>					
					</ButtonWrapper>
				</div>
			</ButtonSection> 

            <NextWrpper>
                <NextButton hasSelection={hasSelection} >다음</NextButton>
            </NextWrpper>
		</Wrapper>


	)


}

export default React.memo(Selection);
