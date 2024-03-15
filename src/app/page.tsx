'use client'
import Image from "next/image";
import { TodoList } from './components/TodoList/index';
import { TodoStore } from './store/TodoStore';

// import styles from './app.module.scss'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <TodoList todoStore={TodoStore}/>
      </div>
    </main>
  );
}
