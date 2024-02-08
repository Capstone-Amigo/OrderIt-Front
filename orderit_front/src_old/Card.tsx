import React from "react";
import "./Card.css";

interface CardProps {
  setCurrentPage: (value: string) => void;
  setCard: (value: boolean) => void;
  total: number;
}

const Card: React.FC<CardProps> = ({ setCurrentPage, setCard, total }) => {
  const closeCard = () => {
    setCard(false);
  };
  const toResult = () => {
    setCurrentPage('Result');
  };

  return (
    <div className="CardWindow">
      <h1>카드를 입력해 주세요</h1>
      <button className='CardButton' onClick={closeCard}>메뉴선택으로 되돌아가기</button>
      <button className='CardButton' onClick={toResult}>(임시)결제완료 버튼</button>
    </div>
  );
};

export default Card;