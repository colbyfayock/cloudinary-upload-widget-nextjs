import Head from 'next/head'
import Image from 'next/image'

import CloudinaryUploadWidget from '../components/CloudinaryUploadWidget';

import styles from '../styles/Home.module.css'

export default function Upload() {
  function saveImage() {
    console.log('saveImage');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Upload
        </h1>

          <CloudinaryUploadWidget
            callback={(e) => saveImage(e, data, setData)}
          >
            {({ open }) => (
              <button
                onClick={open}
                className="absolute w-full h-full rounded-md bg-gray-200 z-10 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all ease-linear duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z" />
                </svg>
                <p>Upload another image</p>
              </button>
            )}
          </CloudinaryUploadWidget>
      </main>
    </div>
  )
}
