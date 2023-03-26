export default function Home() {
  return (
    <main>
      <div className="container mx-auto py-10">
        <section>
          <h1 className="font-bold text-3xl font-serif">Евгений Кравцов</h1>
          <p className="my-5 max-w-[460px]">
            Привет! Я Евгений Кравцов. Frontend-разработчик с более чем 4-х летним опытом. Работал в таких компаниях как start.ru, Ozon.
          </p>
          <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
            <picture className="max-w-[200px]">
              <source srcSet="avatar.avif" type="image/avif" />
              <source srcSet="avatar.webp" type="image/webp" />
              <img src="avatar.jpg" alt="Евгений Кравцов" loading="lazy" />
            </picture>
            <ul className="flex flex-col list-disc">
              <li className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 ">
                Языки программирования: JavaScript, TypeScript, HTML 5, CSS,
                SCSS, PHP
              </li>
              <li className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 ">
                Технологии: React.js, Next.js, Redux, WebSockets, Web workers,
                Node.js , Lodash
              </li>
              <li className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 ">
                Инструменты: Webpack, Docker, Nginx, Git, Bitbucket, Gitlab,
                Jenkins, Jest, Jira
              </li>
            </ul>
          </div>
          <p className="my-5 max-w-[600px] ">
            Меня вдохновляют сложные технические задачи, такие как: внедрение
            впечатляющих сложных анимаций или оптимизация производительности
            веб-сайта за счет эффективного рендеринга.
          </p>
          <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm">
            <li>
              <a
                className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://medium.com/@evgeniykravtsov1992"
              >
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 -55 256 256"
                  version="1.1"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
                <p className="h-7">Мой Medium</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center hover:text-neutral-200 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="mailto: evgeniykravtsov1992@gmail.com"
              >
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                >
                  <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 13 15 C 11.35503 15 10 16.35503 10 18 L 10 32 C 10 33.64497 11.35503 35 13 35 L 37 35 C 38.64497 35 40 33.64497 40 32 L 40 18 C 40 16.35503 38.64497 15 37 15 L 13 15 z M 13.414062 17 L 36.583984 17 L 27.677734 25.892578 C 26.18494 27.382984 23.796834 27.382819 22.304688 25.890625 L 13.414062 17 z M 38 18.412109 L 38 31.587891 L 31.402344 25 L 38 18.412109 z M 12 18.414062 L 18.585938 25 L 12 31.585938 L 12 18.414062 z M 29.988281 26.412109 L 36.585938 33 L 13.414062 33 L 20 26.414062 L 20.890625 27.304688 C 23.146478 29.56054 26.832638 29.562194 29.089844 27.308594 L 29.988281 26.412109 z" />
                </svg>
                <p className="h-7">Напиши мне</p>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
