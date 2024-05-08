import Text from "./components/shared/Text";
import Button from "./components/shared/Button";
import Input from "./components/shared/Input";
import TextField from "./components/shared/TextField";
import { useAlertContext } from "./context/AlertContext";

function App() {
  const { open } = useAlertContext();

  return (
    <>
      <Text typograph="t1" color="blue">
        안녕하세요
      </Text>
      <Text typograph="t2" color="gray">
        안녕하세요
      </Text>
      <Text typograph="t3" color="green">
        안녕하세요
      </Text>
      <Text typograph="t4" color="red">
        안녕하세요
      </Text>
      <Text>안녕하세요</Text>
      <div style={{ width: "100%", height: 10, background: "black" }}></div>
      <Button color="primary">클릭미</Button>
      <Button color="primary" weak={true}>
        클릭미
      </Button>
      <Button color="success">클릭미</Button>
      <Button color="success" weak={true}>
        클릭미
      </Button>
      <Button color="error">클릭미</Button>
      <Button color="error" weak={true}>
        클릭미
      </Button>
      <Button full>클릭미</Button>
      <Button disabled>클릭미</Button>
      <Input aria-invalid={false} />
      <Input aria-invalid={true} />
      <TextField label="아이디" />
      <TextField
        label="아이디"
        hasError={true}
        helpMessage="아이디를 입력해주세요."
      />
      <div style={{ width: "100%", height: 10, background: "black" }}></div>
      <Button
        weak={true}
        onClick={() =>
          open({
            title: "카드신청완료",
            description: "내역페이지를 확인해주세요",
            onButtonClick: () => {
              //
            },
          })
        }
      >
        Open Alert
      </Button>
    </>
  );
}

export default App;
