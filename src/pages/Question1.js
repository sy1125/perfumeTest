import React from "react";
import { useNavigate } from "react-router-dom";

function Question1({question1, onClick, now}) {
    let navigate = useNavigate();
    let next = `/test${now+1}`;
    if(question1.length-1 <= now) {
        next = '/result';
    }

    return (
        <div>
            <h2>질문 테스트</h2>
            <div>
                {question1[now].map((it) => (
                    <div key={it.question_id}>
                        <div onClick={()=>{
                            onClick(it.score);
                            navigate(next, {replace:true});
                        }}>질문 : {it.question_content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Question1;