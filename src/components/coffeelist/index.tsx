import { CoffeeI, CoffeeT } from "../../reducers/coffeeReducer";
import { Container, Item, Image } from "./styles";
export interface ItemI {
  coffee: CoffeeT;
}

export default function CoffeeList({ coffees }: CoffeeI): JSX.Element {
  return (
    <Container>
      {coffees.map((coffee: CoffeeT): JSX.Element => {
        return (
          <Item to={`/coffee/${coffee.id}`} key={coffee.id} coffee={coffee}>
            <Image src={coffee.src} />
            {coffee.title}
          </Item>
        );
      })}
    </Container>
  );
}
