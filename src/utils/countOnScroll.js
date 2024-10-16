const countOnScroll = () => {
  const subscribersCountElem = document.querySelector("#subcribers_count");
  const viewsCountElem = document.querySelector("#views_count");
  const watchHoursCountElem = document.querySelector("#watch_hours_count");
  const videosUploadedCountElem = document.querySelector(
    "#video_uploaded_count"
  );

  let subscribers = 0;
  let views = 0;
  let watchHours = 0;
  let videosUploaded = 0;
  let isCountStarts = [false, false, false, false];

  let subscribersId, viewsId, watchHoursId, videosUploadedId;

  const createObserver = (
    targetElement,
    customCallback,
    countVal,
    countSpeed,
    id,
    index
  ) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isCountStarts[index]) {
              isCountStarts[index] = true;
              customCallback(entry.target, countVal, countSpeed, id);
            }
          }
        });
      },
      {
        rootMargin: "0px 0px -30px 0px",
        threshold: 0.5,
      }
    );

    observer.observe(targetElement);
  };

  const count = (element, countVal, countSpeed, idVar) => {
    const dataCount = parseInt(element.dataset.count);
    const increment = Math.ceil(dataCount / 100); // Dynamic increment based on target

    idVar = setInterval(() => {
      if (countVal < dataCount) {
        countVal += increment; // Increment dynamically
        if (countVal > dataCount) countVal = dataCount; // Avoid overshooting
        element.textContent = countVal.toLocaleString();
      } else {
        clearInterval(idVar); // Stop interval when done
      }
    }, countSpeed);
  };

  createObserver(
    subscribersCountElem,
    count,
    subscribers,
    50,
    subscribersId,
    0
  );
  createObserver(viewsCountElem, count, views, 50, viewsId, 1);
  createObserver(watchHoursCountElem, count, watchHours, 40, watchHoursId, 3);
  createObserver(
    videosUploadedCountElem,
    count,
    videosUploaded,
    100,
    videosUploadedId,
    4
  );
};

export default countOnScroll;
