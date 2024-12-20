
// const GroceryList = () => (
//   <ul>
//     <li>bananas</li>
//     <li>milk</li>
//   </ul>
// );

//using components
// const Bananas = () => (
//   <li> bananas</li>
// );

// const Milk = () => (
//   <li>milk</li>
// );

// const GroceryList = () => (
//   <ul>
//     <Bananas />
//     <Milk />
//   </ul>
// );

//creating reusable components
// const GroceryItems = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>
// );

// const GroceryList = () => (
//   <GroceryItems items={['bananas', 'milk']} />
// );

//handling events
// const Items = (props) => {

//   const onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.items[0]}</li>
//       <li onClick={onListItemClick}>{props.items[1]}</li>
//     </ul>
//   );
// };

// const GroceryList = () => (
//   <Items items={['bananas', 'milk']} />
// );

//React hooks for interactivity
//outside the component
// var items = ['bananas', 'milk'];
// const Items = items.map((item) =>
//   <li>{item}</li>
// );

// const GroceryList = (props) => (
//   <ul>
//     {Items}
//   </ul>
// );

//inside the component
// var items = ['bananas', 'milk'];

// const GroceryList = () => (
//   <ul>
//     {items.map((item) => (
//       <li>{item}</li>
//     ))}
//   </ul>
// );

// using hooks to change state

var items = ['bananas', 'milk'];
const { useState } = React;
const Item = (props) => {
  const [isDone, setIsDone] = useState(false);
  const style = {
    fontWeight: isDone ? 'bold' : 'normal',
  };
  return (
    <li style={style}
    onMouseEnter={() => setIsDone(true)}
    onMouseLeave={() => setIsDone(false)}
    >
      {props.item}
    </li>
  );
};

const GroceryList = () => (
  <ul>
    {items.map((item) => (
      <Item item={item} />
    ))}
  </ul>
);



ReactDOM.render(
  <GroceryList />,
  document.getElementById('app')
);