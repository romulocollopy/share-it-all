import { Accessor, For, JSX } from "solid-js";
import Card from "./Card";

interface CardListProps {
  cards: JSX.Element[];
}

export default function CardList(props: CardListProps) {
  return (
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-stretch content-stretch container mx-auto gap-4">
      <For each={props.cards}>
        {(c: JSX.Element, _: Accessor<number>) => {
          return <Card>{c}</Card>;
        }}
      </For>
    </ul>
  );
}
