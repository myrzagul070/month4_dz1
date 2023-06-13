import {Card} from "./Components/Card";
import casino from "./asserts/casino.jpg"
import muhaned from "./asserts/calibr.webp"
import flower from "./asserts/redflower.jpg"
function App() {
  return (
      <>
      <Card img = {casino}
            title = "halo"
            span = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            btn = "click"
            bt = {calipso}
      />
      <Card img = {muhaned}
            title = "hello"
            span = "Lorem ipsum dolor sit amet, consectetur."
            btn = "tap"
            bt = {cali}
      />
      <Card img = {flower}
            title = "salam aleikum"
            span = "Lorem ipsum dolor sit amet."
            btn = "to tap"
            bt = {calip}
      />
      </>
  )
}
const calipso = () => {
    console.log(686)
}
const cali = () => {
    console.log(68)
}
const calip = () => {
    console.log(6)
}

export default App;
