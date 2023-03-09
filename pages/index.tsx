import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Home/Banner/Banner'
import Home from '@/components/Home/home'
const inter = Inter({ subsets: ['latin'] })

export default function main() {
  return (
    <>
    <Home></Home>
    </>
  )
}
