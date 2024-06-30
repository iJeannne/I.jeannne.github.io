import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'; // Импортируем плагин

dayjs.extend(relativeTime); // Инициализируем плагин

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

document.addEventListener('DOMContentLoaded', async () => {
    const myEmail: string = 'j.ivanova@innopolis.university';
    const queryParams: URLSearchParams = new URLSearchParams({ email: myEmail });
    const urlToGetId: string = `https://fwd.innopolis.university/api/hw2?${queryParams.toString()}`;

    try {
        const response: Response = await fetch(urlToGetId);
        if (response.ok) {
            const comicId: string = await response.text(); 
            const queryParamsForComic: URLSearchParams = new URLSearchParams({ id: comicId });
            const urlToFetchComic: string = `https://fwd.innopolis.university/api/comic?${queryParamsForComic.toString()}`;

            const comicDataResponse: Response = await fetch(urlToFetchComic);
            if (comicDataResponse.ok) {
                const comicData: Comic = await comicDataResponse.json();

                const comicInfoContainer: HTMLElement | null = document.getElementById("comic-info");
                if (comicInfoContainer) {
                    const titleParagraph: HTMLElement | null = document.getElementById("title");
                    if (titleParagraph) {
                        titleParagraph.textContent = `${comicData.safe_title}`;
                        comicInfoContainer.appendChild(titleParagraph);
                    }

                    const imageElement: HTMLImageElement | null = document.getElementById("comimg") as HTMLImageElement;
                    if (imageElement) {
                        imageElement.src = comicData.img;
                        imageElement.alt = comicData.alt;
                        comicInfoContainer.appendChild(imageElement);
                    }

                    const publicationDateParagraph: HTMLParagraphElement = document.createElement('p');
                    const publicationDate: Date = new Date(Number(comicData.year), Number(comicData.month) - 1, Number(comicData.day));
                    publicationDateParagraph.textContent = `Publication Date: ${publicationDate.toLocaleDateString()} (${dayjs(publicationDate).fromNow()})`;
                    comicInfoContainer.appendChild(publicationDateParagraph);
                }
            } else {
                alert("Failed to fetch comic details: " + comicDataResponse.status);
            }
        } else {
            alert("Failed to find comic ID: " + response.status);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});
