import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import "./styles/index.scss";

// Svg
import { ReactComponent as InstagramIcon } from "./images/instagram.svg";
import { ReactComponent as VkIcon } from "./images/vk.svg";
import { ReactComponent as TelegramIcon } from "./images/telegram.svg";
import { ReactComponent as TwoGisIcon } from "./images/2gis.svg";
import { ReactComponent as CheckIcon } from "./images/check.svg";

import React from 'react';


function App() {

  const [currentTab, setCurrentTab] = useState(0);
  const [listData, setListData] = useState(null);

  return (
    <div className="app">
      <Header listData={listData} setListData={setListData} />

      <main className="main">
        <div className="container">
          <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

          { /* Поиск */ }
          {
            currentTab == 0 && 
            <div className="tab">
              <h1 className="tab__title">
                <span>Анализ рынка</span>
              </h1>

              <div className="tab__analysis">
                <div className="analysis__list">
                  { (listData != null) &&
                    listData.map((i, index) => {
                      return (
                      <div key={index} className="analysis__list-card">
                        <div className="card__img">
                          <img src={i.external_content[0].main_photo_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcd5J_YDIyLfeZCHcsBpcuN8irwbIJ_VDl0Q&s"} />

                        </div>
                        <div className="card__about">
                          <div className="card__about-top">
                            <h2 className="card__about-name">
                              {i.name}
                            </h2>
                            <div className="card__about-address">
                              <span>{i.address_name + ", " + i.address_comment}</span>
                              <div className="card__about-ratio">
                                {Math.floor(Math.random() * 5000)} м
                              </div>
                            </div>
                          </div>
                          <div className="card__about-bottom">
                            <div className="card__about-smm">
                              <a href="#">
                                <VkIcon className="vk_icon" />
                              </a>
                              <a href="#">
                                <TelegramIcon className="telegram_icon" />
                              </a>
                            </div>

                            <div className="twogis_rating">
                              <span>{i.reviews.general_rating}</span>
                              <TwoGisIcon />
                            </div>
                            <div className="additional_rating">
                              <span>{Math.floor(Math.random() * 100)}</span>
                              <CheckIcon />
                            </div>
                          </div>
                        </div>

                      </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          }
          

          {
            currentTab == 1 && 
            <div className="tab">
              <h1 className="tab__title">Главная</h1>
            </div>
          }


          {
            currentTab == 2 && 
            <div className="tab">
              <h1 className="tab__title">Статистика</h1>
              
            </div>
          }
          

          {
            currentTab == 3 && 
            <div className="tab">
              <h1 className="tab__title">Прошлые запросы</h1>

            </div>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
