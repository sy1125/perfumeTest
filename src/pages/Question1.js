import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Question1({ question1, onClick }) {
    const now = parseInt(useParams().id) - 1;
    //1
    let navigate = useNavigate();
    let next = `/test${now + 2}`;
    if (question1.length - 1 <= now) {
        next = '/result';
    }
    function handleClick(score) {
        let total = score; //3

        let data = localStorage.getItem('Score');
        data = data ? JSON.parse(data) : []; //[{score: 3, id: 0}, {score: 4, id: 1}, {score: 7, id: 2}];

        const index = data.findIndex(x => x.id === now); // 1

        if (index !== -1) {
            data.splice(index, data.length); //[{score: 3, id: 0}];
        }
        total += data[data.length - 1]?.score || 0; //3 + n
        // total += (data[data.length-1]?.score) ? data[data.length-1].score : 0;

        data.push({ score: total, id: now }); // [{scroe: 3, id: 0}, {scroe: 3+n, id: 1}]
        localStorage.setItem('Score', JSON.stringify(data)); //[{scroe: 3, id: 0}, {scroe: 3+n, id: 1}]

        onClick(total);
    }

    return (
        <div>
            <div className="question">
                <span className="title-num">Q{now + 1}.</span>
                <div className="text-container">
                    {question1[now].map((it) => (
                        <div key={it.question_id}>
                            <span className="title">{it.question_title}</span>
                            <div className="text" onClick={() => {
                                handleClick(it.score);
                                navigate(next);
                            }}>{it.question_content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Question1;