import React from "react";

const Star = ({ starId, marked }: any) => {
    return (
        <span
            star-id={starId}
            role="button"
            style={{ color: "#ff9933", cursor: "pointer" }}
        >
            {marked ? "\u2605" : "\u2606"}
        </span>
    );
};

// Create an array of 5: Array.from({length: 5}, (v,i) => i)
const StarRating = (props: any) => {
    // Manages on Hover selection of a star
    const [selection, setSelection] = React.useState(0);

    // Manages rating selection
    const [rating, setRating] = React.useState(props.rating | 0);

    const hoverOver = (event: any) => {
        let starId = 0;
        if (event && event.target && event.target.getAttribute("star-id")) {
            starId = event.target.getAttribute("star-id");
        }
        setSelection(starId);
    };

    return (
        <span        
            onMouseOver={hoverOver}
            onMouseOut={() => hoverOver(null)}   
            {...props}         
        >
            {Array.from({ length: 10 }, (v, i) => (
                <Star key={i} starId={i + 1} marked={selection ? selection > i : rating > i} />
            ))}
        </span>
    );
};

export default StarRating;
