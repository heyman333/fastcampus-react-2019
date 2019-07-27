import React from "react";
import StyledButton from "./components/StyledButton";
import { DatePicker } from "antd";
import "antd/es/date-picker/style/css";

function App() {
  return (
    <div className="App">
      <p>
        <StyledButton className="orange">버튼</StyledButton>
      </p>
      <p className="orange">
        <StyledButton>
          <a className="orange" href="https://naver.com">
            버튼
          </a>
        </StyledButton>
      </p>
    </div>
  );
}

export default App;

// import React from "react";
// import { Button } from "antd";

// export default class LoadingButton extends React.Component {
//   state = {
//     loading: false
//   };

//   startLoading = () => {
//     console.log("start");
//     this.setState({ loading: true });
//     setTimeout(() => {
//       this.setState({ loading: false });
//     }, 1000);
//   };

//   render() {
//     const { loading } = this.state;
//     return (
//       <Button
//         type="primary"
//         size="large"
//         icon="bug"
//         loading={loading}
//         onClick={this.startLoading}
//         style={{
//           width: 50
//         }}
//       />
//     );
//   }
// }
