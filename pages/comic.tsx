import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComicP from '../components/Comic';
import Menu from '../components/Menu';
import Head from 'next/head';

interface Comic {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

async function fetchComicData() {
  const myEmail: string = 'j.ivanova@innopolis.university';
  const queryParams: URLSearchParams = new URLSearchParams({ email: myEmail });
  const urlToGetId: string = `https://fwd.innopolis.university/api/hw2?${queryParams.toString()}`;

  try {
    const response = await fetch(urlToGetId);
    if (response.ok) {
      const comicId = await response.text();
      const queryParamsForComic = new URLSearchParams({ id: comicId });
      const urlToFetchComic = `https://fwd.innopolis.university/api/comic?${queryParamsForComic.toString()}`;

      const comicDataResponse = await fetch(urlToFetchComic);
      if (comicDataResponse.ok) {
        const comicData = await comicDataResponse.json();
        return { comic: comicData, error: null };
      } else {
        return {
          comic: null,
          error: 'Failed to fetch comic details: ' + comicDataResponse.status,
        };
      }
    } else {
      return {
        comic: null,
        error: 'Failed to find comic ID: ' + response.status,
      };
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return { comic: null, error: 'An error occurred: ' + error };
  }
}

export const getServerSideProps = async () => {
  const { comic, error } = await fetchComicData();
  return {
    props: {
      comic,
      error,
    },
  };
};

const ComicPage: React.FC<{ comic: Comic | null; error: string | null }> = ({
  comic,
  error,
}) => {
  return (
    <div>
      <Head>
        <title>Comic Page</title>
        <meta
          name="description"
          content="This is thecomic that i get with my UI mail"
        />
      </Head>
      <Header />
      <Menu />
      <ComicP />
      <Footer />
    </div>
  );
};

export default ComicPage;
