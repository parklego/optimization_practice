import Text from "./components/shared/Text";
import Button from "./components/shared/Button";

function App() {
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
    </>
  );
}

export default App;
