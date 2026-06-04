---
title: "React - Code Snippets"
created: 2025-04-13T17:13:36.561-05:00
modified: 2025-04-14T11:06:10.183-05:00
parent: "[[React - React.js - ReactJS]]"
children: []
---
> [!expand-ui]- Counter Independent
> ```
> import { useState } from 'react';
>
> export default function MyApp() {
>   return (
>     <div>
>       <h1>Counters that update separately</h1>
>       <MyButton />
>       <MyButton />
>     </div>
>   );
> }
> function MyButton() {
>   const [count, setCount] = useState(0);
>
>   function handleClick() {
>     setCount(count + 1);
>   }
>
>   return (
>     <button onClick={handleClick}>
>       Clicked {count} times
>     </button>
>   );
> }
> ```

> [!expand-ui]- Counter Together
> ```
> import { useState } from 'react';
>
> export default function MyApp() {
>   const [count, setCount] = useState(0);
>
>   function handleClick() {
>     setCount(count + 1);
>   }
>
>   return (
>     <div>
>       <h1>Counters that update together</h1>
>       <MyButton count={count} onClick={handleClick} />
>       <MyButton count={count} onClick={handleClick} />
>     </div>
>   );
> }
>
> function MyButton({ count, onClick }) {
>   return (
>     <button onClick={onClick}>
>       Clicked {count} times
>     </button>
>   );
> }
> ```

> [!expand-ui]- TicTacToe - Example
> Based on: [https://react.dev/learn/tutorial-tic-tac-toe](https://react.dev/learn/tutorial-tic-tac-toe)
> ```
> import { useState } from 'react';
>
> function Square({ value, onSquareClick }) {
>   return (
>     <button className="square" onClick={onSquareClick}>
>       {value}
>     </button>
>   );
> }
>
> function Board({ xIsNext, squares, onPlay }) {
>   function handleClick(i) {
>     if (calculateWinner(squares) || squares[i]) {
>       return;
>     }
>     const nextSquares = squares.slice();
>     if (xIsNext) {
>       nextSquares[i] = 'X';
>     } else {
>       nextSquares[i] = 'O';
>     }
>     onPlay(nextSquares);
>   }
>
>   const winner = calculateWinner(squares);
>   let status;
>   if (winner) {
>     status = 'Winner: ' + winner;
>   } else {
>     status = 'Next player: ' + (xIsNext ? 'X' : 'O');
>   }
>
>   return (
>     <>
>       <div className="status">{status}</div>
>       <div className="board-row">
>         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
>         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
>         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
>       </div>
>       <div className="board-row">
>         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
>         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
>         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
>       </div>
>       <div className="board-row">
>         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
>         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
>         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
>       </div>
>     </>
>   );
> }
>
> export default function Game() {
>   const [history, setHistory] = useState([Array(9).fill(null)]);
>   const [currentMove, setCurrentMove] = useState(0);
>   const xIsNext = currentMove % 2 === 0;
>   const currentSquares = history[currentMove];
>
>   function handlePlay(nextSquares) {
>     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
>     setHistory(nextHistory);
>     setCurrentMove(nextHistory.length - 1);
>   }
>
>   function jumpTo(nextMove) {
>     setCurrentMove(nextMove);
>   }
>
>   const moves = history.map((squares, move) => {
>     let description;
>     if (move > 0) {
>       description = 'Go to move #' + move;
>     } else {
>       description = 'Go to game start';
>     }
>     return (
>       <li key={move}>
>         <button onClick={() => jumpTo(move)}>{description}</button>
>       </li>
>     );
>   });
>
>   return (
>     <div className="game">
>       <div className="game-board">
>         <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
>       </div>
>       <div className="game-info">
>         <ol>{moves}</ol>
>       </div>
>     </div>
>   );
> }
>
> function calculateWinner(squares) {
>   const lines = [
>     [0, 1, 2],
>     [3, 4, 5],
>     [6, 7, 8],
>     [0, 3, 6],
>     [1, 4, 7],
>     [2, 5, 8],
>     [0, 4, 8],
>     [2, 4, 6],
>   ];
>   for (let i = 0; i < lines.length; i++) {
>     const [a, b, c] = lines[i];
>     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
>       return squares[a];
>     }
>   }
>   return null;
> }
> ```

> [!expand-ui]- Thinking in React
> Based on: [https://react.dev/learn/thinking-in-react](https://react.dev/learn/thinking-in-react)
> ```
> import { useState } from 'react';
>
> function FilterableProductTable({ products }) {
>   const [filterText, setFilterText] = useState('');
>   const [inStockOnly, setInStockOnly] = useState(false);
>
>   return (
>     <div>
>       <SearchBar 
>         filterText={filterText} 
>         inStockOnly={inStockOnly} 
>         onFilterTextChange={setFilterText} 
>         onInStockOnlyChange={setInStockOnly} />
>       <ProductTable 
>         products={products} 
>         filterText={filterText}
>         inStockOnly={inStockOnly} />
>     </div>
>   );
> }
>
> function ProductCategoryRow({ category }) {
>   return (
>     <tr>
>       <th colSpan="2">
>         {category}
>       </th>
>     </tr>
>   );
> }
>
> function ProductRow({ product }) {
>   const name = product.stocked ? product.name :
>     <span style={{ color: 'red' }}>
>       {product.name}
>     </span>;
>
>   return (
>     <tr>
>       <td>{name}</td>
>       <td>{product.price}</td>
>     </tr>
>   );
> }
>
> function ProductTable({ products, filterText, inStockOnly }) {
>   const rows = [];
>   let lastCategory = null;
>
>   products.forEach((product) => {
>     if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
>       return;
>     }
>     if (inStockOnly && !product.stocked) {
>       return;
>     }
>     if (product.category !== lastCategory) {
>       rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
>     }
>     rows.push(<ProductRow product={product} key={product.name} />);
>     lastCategory = product.category;
>   });
>
>   return (
>     <table>
>       <thead>
>         <tr>
>           <th>Name</th>
>           <th>Price</th>
>         </tr>
>       </thead>
>       <tbody>{rows}</tbody>
>     </table>
>   );
> }
>
> function SearchBar({
>   filterText,
>   inStockOnly,
>   onFilterTextChange,
>   onInStockOnlyChange
> }) {
>   return (
>     <form>
>       <input 
>         type="text" 
>         value={filterText} placeholder="Search..." 
>         onChange={(e) => onFilterTextChange(e.target.value)} />
>       <label>
>         <input 
>           type="checkbox" 
>           checked={inStockOnly} 
>           onChange={(e) => onInStockOnlyChange(e.target.checked)} />
>         {' '}
>         Only show products in stock
>       </label>
>     </form>
>   );
> }
>
> const PRODUCTS = [
>   {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
>   {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
>   {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
>   {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
>   {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
>   {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
> ];
>
> export default function App() {
>   return <FilterableProductTable products={PRODUCTS} />;
> }
> ```
