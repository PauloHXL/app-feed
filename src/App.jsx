import { Header } from './components/Header'
import { Post } from './Post'

import style from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Paulo Henrique"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum rerum, iusto molestiae reprehenderit quasi maxime harum sint, pariatur nulla necessitatibus deleniti quibusdam laborum. Veritatis fugit nulla molestiae qui facere."
          />
          <Post
            author="Xavier Lopes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum rerum, iusto molestiae reprehenderit quasi maxime harum sint, pariatur nulla necessitatibus deleniti quibusdam laborum. Veritatis fugit nulla molestiae qui facere."
          />
        </main>
      </div>
    </div>

  )
}

