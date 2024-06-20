document.addEventListener('DOMContentLoaded', async () => {
    const myEmail = 'j.ivanova@innopolis.university';
    const queryParams = new URLSearchParams({ email: myEmail });
    const urlToGetId = `https://fwd.innopolis.university/api/hw2?${queryParams.toString()}`;

    try {
        const response = await fetch(urlToGetId);
        if (response.ok) {
            const comicId = await response.text(); // Предполагается, что это текстовый идентификатор
            const queryParamsForComic = new URLSearchParams({ id: comicId });
            const urlToFetchComic = `https://fwd.innopolis.university/api/comic?${queryParamsForComic.toString()}`;

            const comicDataResponse = await fetch(urlToFetchComic);
            if (comicDataResponse.ok) {
                const comicData = await comicDataResponse.json();

                const comicInfoContainer = document.getElementById("comic-info");

                const titleParagraph = document.getElementById("title");
                titleParagraph.textContent = `${comicData.safe_title}`;
                comicInfoContainer.appendChild(titleParagraph);

                const imageElement = document.getElementById("comimg");
                imageElement.src = comicData.img;
                imageElement.alt = comicData.alt;
                comicInfoContainer.appendChild(imageElement);

                const publicationDateParagraph = document.createElement('p');
                const publicationDate = new Date(comicData.year, comicData.month - 1, comicData.day);
                publicationDateParagraph.textContent = `Publication Date: ${publicationDate.toLocaleDateString()}`;
                comicInfoContainer.appendChild(publicationDateParagraph);
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
