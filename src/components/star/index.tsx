import React, { useState } from "react";
import { StarContainer, Star } from "./styles";

export default function StarRating({ on }: { on: boolean }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <StarContainer className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Star
            on={on}
            type="button"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </Star>
        );
      })}
    </StarContainer>
  );
}
// .on {
//   color: #000;
// }
// .off {
//   color: #ccc;
// }
