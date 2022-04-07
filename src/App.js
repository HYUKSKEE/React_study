/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "다혁스키 추천",
    "나진혁 추천",
    "가혁이 추천",
  ]);
  let [like, likeUP] = useState(0);

  let [입력값, 입력값변경] = useState("");

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0);

  //var array = [2,3,4];

  //var narray = array.map(function(a){
  //return a*2;
  //});

  function sortButton() {
    var newArray = [
      ...글제목,
    ]; /* var newArray = 글제목  <== 복사가 아닌 값공유가 일어남 이렇게 쓰지마! deep copy 방식인 [...글제목] 이렇게 써*/
    글제목변경(newArray.sort());
  }

  function detail() {
    var newArray = [...글제목];
    newArray[0] = "아티스트 추천";
    newArray[1] = "본인 추천";
    newArray[2] = "남친 추천";
    글제목변경(newArray);
  }

  let post = "혁스키's blog list";
  function test() {
    return post;
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "gray", fontSize: "20px" }}>혁스키 blog</div>
      </div>
      <h4>{test()}</h4>
      <button onClick={sortButton} title="가나다순으로 정렬하자!">
        🎫
      </button>
      <span onClick={detail} title="다르게 보기">
        🔍
      </span>
      <span onClick={() => modal변경(!modal)} title="modal 열고닫기">
        🎫
      </span>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={a}>
            <h3
              className="list title"
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {a}{" "}
              <span
                onClick={() => {
                  likeUP(like + 1);
                }}
                title="좋아요!"
              >
                👍
              </span>{" "}
              {like}
            </h3>
            <p>3월19일 발행</p>
            <hr />
          </div>
        );
      })}

      {/* {
        입력값.map(function (a){
          return(<div className='list' key={a}>
          <h3 onClick={()=>{입력값변경(i)}}>{a} <span onClick={() => { likeUP(like + 1) }} title='좋아요!'>👍</span> {like}</h3>
          <p>3월19일 발행</p>
          <hr />
        </div>)
        })

      } */}

      {/* <input onChange={(e)=>{입력값변경(e.target.value)}}></input> */}

      {/* <button onClick={()=>{누른제목변경(0)}}>버튼1</button>
      <button onClick={()=>{누른제목변경(1)}}>버튼2</button>
      <button onClick={()=>{누른제목변경(2)}}>버튼3</button> */}
      <div className="update">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            var arrayCopy = [...글제목];
            arrayCopy.unshift(입력값);
            글제목변경(arrayCopy);
          }}
        >
          저장
        </button>
      </div>

      {modal === true ? (
        <Modal 제목={글제목} 누른제목={누른제목}></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h2>{props.제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>내용</p>
      </div>
    </>
  );
}

export default App;
