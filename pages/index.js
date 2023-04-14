import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@pages/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Computelify, Inc.</title>
        <meta name="description" content="Computelify, Inc." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
        <div className={styles.description}>

          <div className={styles.logo}>
            <img
              id="computelify-logo"
              src="https://raw.githubusercontent.com/lsdake/community/bb20410abe216a118b379545fc9725358fa8dbd7/assets/assets/xertai-logo-bound-circle.svg"
              alt="Computelify Logo"
              className={styles.computelifylogo}
            />
          </div>

          <p>
            Computelify, Inc.
          </p>
          
        </div>

        <div className={styles.center}>
          
          <h2>🚧 Under Construction! 🚧</h2>
        </div>
        

        <div className={styles.card}>
          
            <h2 className={inter.className}>
              Contact Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              TODO: insert contact info here
            </p>
            <p>loooooooooong long long long long long text</p>
            <p>text</p>  
            <p>text</p>     
          
        </div>
      </main>
    </>
  )
}
