/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

// CSS
const frame = css`
  position: absolute;
  top: 35%;
  left: 50%;
  width: 500px;
  height: 600px;
  margin-top: -100px;
  margin-left: -250px;
`;

const center = css`
  text-align: center;
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

  const colorBox = css`
    background-color: ${randomColor};
    width: ${width > 0 && width < 1000 ? width : 400}px;
    height: ${height > 0 && height < 1000 ? height : 300}px;
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

      <div css={colorBox}>{str}</div>
    </div>
  );
}

export default App;
