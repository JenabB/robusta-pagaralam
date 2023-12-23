import React from 'react'

interface Props {
    title: string;
    items: string[];
}

const FaqItem = (props: Props) => {
    return (
        <div>
            <div>
                <p>{props.title}</p>
            </div>
            <div>
                {props.items.map((item, index) => <div key={index}>
                    {item}</div>)}
            </div>
        </div>
    )
}

export default FaqItem