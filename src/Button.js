import { css } from '@emotion/react';
import color from 'randomcolor';

// CSS
const button = css`
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
`;

export default function Button(props) {
  return (
    <button
      css={button}
      onClick={() =>
        props.setRandomColor(
          color.randomColor({ luminosity: props.luminosity, hue: props.hue }),
        )
      }
    >
      Generate
    </button>
  );
}
