// src/components/ComicPage.tsx
import React, { useEffect, useState } from 'react';

const ComicP: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div>
      <h1>Comic</h1>
      {data.map((comic: any) => (
        <div key={comic.id}>
          <h2>{comic.title}</h2>
          <img src={comic.imageUrl} alt={comic.title} />
        </div>
      ))}
    </div>
  );
};

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

const ComicPage: React.FC = () => {
  const [comic, setComic] = useState<Comic | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComic = async () => {
      const myEmail: string = 'j.ivanova@innopolis.university';
      const queryParams: URLSearchParams = new URLSearchParams({
        email: myEmail,
      });
      const urlToGetId: string = `https://fwd.innopolis.university/api/hw2?${queryParams.toString()}`;

      try {
        const response: Response = await fetch(urlToGetId);
        if (response.ok) {
          const comicId: string = await response.text();
          const queryParamsForComic: URLSearchParams = new URLSearchParams({
            id: comicId,
          });
          const urlToFetchComic: string = `https://fwd.innopolis.university/api/comic?${queryParamsForComic.toString()}`;

          const comicDataResponse: Response = await fetch(urlToFetchComic);
          if (comicDataResponse.ok) {
            const comicData: Comic = await comicDataResponse.json();
            setComic(comicData);
          } else {
            setError(
              'Failed to fetch comic details: ' + comicDataResponse.status
            );
          }
        } else {
          setError('Failed to find comic ID: ' + response.status);
        }
      } catch (error) {
        setError('An error occurred: ' + error);
        console.error('An error occurred:', error);
      }
    };

    fetchComic();
  }, []);

  return (
    <div className="comic-page flex-container">
      <h1>My XKCD Comic</h1>
      {error && <p>{error}</p>}
      {comic ? (
        <div id="comic-info" className="flex-container">
          <h2 id="title">{comic.safe_title}</h2>
          <img id="comimg" src={comic.img} alt={comic.alt} />
          <p>{comic.alt}</p>
          <p></p>
        </div>
      ) : (
        <p>Loading comic...</p>
      )}
      <button className="button-back">
        <a className="button-back" href="/">
          go back
        </a>
      </button>
    </div>
  );
};

export default ComicPage;
