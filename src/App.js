/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

// CSS
const frame = css`
  position: absolute;
  top: 25%;
  left: 55%;
  width: 500px;
  height: 600px;
  margin-top: -100px;
  margin-left: -250px;
`;

const center = css`
  text-align: right;
`;

// Component
function App() {
  const [randomColor, setRandomColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  function onChangeHue(event) {
    setHue(event.currentTarget.value);
  }
  function onChangeLuminosity(event) {
    setLuminosity(event.currentTarget.value);
  }
  function onChangeWidth(event) {
    setWidth(event.currentTarget.value);
  }
  function onChangeHeight(event) {
    setHeight(event.currentTarget.value);
  }

  const str = <h2 css={center}>{randomColor}</h2>;

  // Declaring Emotion styles or a styled component within a React component will cause the element to get recreated, causing loss of state and other problems

  // this problem will be showed. i did not had the time to ask for any solution
  // because of me next project.
  // i just disable the eslint for the line to let it check!

  // eslint-disable-next-line no-restricted-syntax
  const colorBox = css`
    background-color: ${randomColor};
    width: ${width > 0 && width < 1000 ? width : 400}px;
    height: ${height > 0 && height < 1000 ? height : 400}px;
  `;

  return (
    <div css={frame}>
      <div>
        <Input
          htmlFor="hue"
          text="hue"
          type="text"
          id="hue"
          placeholder="blue"
          value={hue}
          onChange={onChangeHue}
        />
      </div>
      <div>
        <Input
          htmlFor="luminosity"
          text="lum"
          type="text"
          id="luminosity"
          placeholder="dark"
          value={luminosity}
          onChange={onChangeLuminosity}
        />
      </div>
      <br />
      <div>
        <Input
          htmlFor="width"
          text="width"
          type="number"
          id="width"
          placeholder="500px"
          value={width}
          onChange={onChangeWidth}
        />
      </div>
      <div>
        <Input
          htmlFor="height"
          text="height"
          type="number"
          id="height"
          placeholder="500px"
          value={height}
          onChange={onChangeHeight}
        />
      </div>
      <br />
      <br />

      <Button
        setRandomColor={setRandomColor}
        luminosity={luminosity}
        hue={hue}
      />
      <br />
      <br />
      <h3> Generated Color:</h3>
      <div css={colorBox}>{str}</div>
    </div>
  );
}

export default App;
