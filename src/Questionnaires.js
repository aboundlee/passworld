import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import CityQuestion from './CityQuestion';
import OsakaQuestion from './OsakaQuestion';
import Result from './Result';



const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  max-width: 480px;
  margin: 0 auto;

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



const NextWrpper = styled.div`
position: fixed;
left: 0px;
right: 0px;
bottom: 20px;
margin: 0px auto;
padding: 0px 20px;
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
    border-radius: 28px;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    height: 53px;
    font-size: 20px;
    padding: 0px 14px;
    background-color: #2b96ed;
    color: #ffffff;
    font-weight: 700;
    border:none;
    opacity: ${props => (props.hasSelection > 0? 1 : 0)}; 
    pointer-events: ${props => (props.hasSelection > 0 ? 'auto' : 'none')}; /* pointer-events 속성 추가 */


    transition: opacity 0.25s ease-in-out; /* opacity 속성만 transition 적용 */

    outline: none;

`;


function Questionnaires() {
    
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [step, setStep] = useState(1);

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


    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

	return (
		<Wrapper>
            {step === 1 && (
            <CityQuestion selectedButtons={selectedButtons} setSelectedButtons={setSelectedButtons}/>
            )}

            {step === 2 && (
            <OsakaQuestion selectedButtons={selectedButtons} setSelectedButtons={setSelectedButtons}/>
            )}

            {step === 3 && (
            <Result selectedButtons={selectedButtons} setSelectedButtons={setSelectedButtons}/>
            )}

            <NextWrpper>
            {/* {step > 1 && (
                <PrevButton onClick={handlePrevStep}>이전</PrevButton>
             )} */}
            {step !== 4 && (
                <NextButton hasSelection={hasSelection} onClick={handleNextStep}>다음</NextButton>
            )}
          </NextWrpper>

		</Wrapper>


	)


}

export default React.memo(Questionnaires);
