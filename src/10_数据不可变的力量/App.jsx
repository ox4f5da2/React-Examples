import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      books: [
        { name: 'book1', price: 90, count: 1 },
        { name: 'book2', price: 49, count: 2 },
        { name: 'book3', price: 59, count: 4 },
        { name: 'book4', price: 99, count: 1 },
      ]
    }
  }

  addBook() {
    const newBook = { name: 'book5', price: 19, count: 6 };
    // 直接改不可行
    // this.state.books.push(newBook);
    // this.setState({
    //   books: this.state.books
    // })
    // 复制一份books，然后更改
    const books = [...this.state.books, newBook];
    this.setState({ books });
  }

  addBookCount(idx) {
    const books = [...this.state.books];
    books[idx].count++;
    this.setState({ books });
  }

  render() {
    return (
      <div>
        <h1>数据不可变的力量</h1>
        <ul>
          {
            this.state.books.map((book, index) => {
              return (
                <li key={index}>
                  <span>{book.name}-{book.price}-{book.count}</span>
                  <button onClick={() => this.addBookCount(index)}>+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={() => this.addBook()}>添加新书</button>
      </div>
    )
  }
}

export default App