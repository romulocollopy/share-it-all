import { children, JSX } from "solid-js";

interface CardProps {
  children: JSX.Element;
}

const Card = (props: CardProps) => {
  const resolved = children(() => props.children);
  return <li class="p-2 bg-slate-100 rounded-lg min-h-24">{resolved()}</li>;
};

export default Card;
