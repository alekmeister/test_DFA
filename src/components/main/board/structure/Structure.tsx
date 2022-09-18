import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import style from './Structure.module.scss';
import userImg from '../../../../icons/user.jpg';

interface Card {
  id: string;
  level: number;
  partners: number;
  members: Array<{
    icon: string;
    username: string;
  }>;
}

const mockCards: Array<Card> = [
  {
    id: uuidv4(),
    level: 1,
    partners: 133,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 2,
    partners: 129,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 3,
    partners: 5455,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 4,
    partners: 4500,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 5,
    partners: 43233,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 6,
    partners: 4500,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 7,
    partners: 43233,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 8,
    partners: 43233,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 9,
    partners: 4500,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 10,
    partners: 43233,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 11,
    partners: 4500,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 12,
    partners: 5455,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 13,
    partners: 129,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
  {
    id: uuidv4(),
    level: 14,
    partners: 133,
    members: [
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
      {
        icon: userImg,
        username: 'kris_anfalova',
      },
    ],
  },
];
export const Structure: React.FC = () => {
  return (
    <div className={style.container}>
      {mockCards.map((el) => (
        <div className={style.card} key={el.id}>
          <div className={style.card_inner}>
            <div className={style.card_numbers}>
              <span className={style.element}>{el.level}</span>
              <span className={style.element}>{el.partners}</span>
            </div>
            <hr className={style.hr} />
            <div className={style.card_titles}>
              <span className={style.element}>Уровень выплат</span>
              <span className={style.element}>Активных партнёров</span>
            </div>
            <OverlayScrollbarsComponent className={style.scrollBar}>
              {el.members.map((user) => (
                <div className={style.user} key={uuidv4()}>
                  <img className={style.user_Icon} alt="user icon" src={user.icon} />
                  <span className={style.user_name}>{user.username}</span>
                </div>
              ))}
            </OverlayScrollbarsComponent>
          </div>
        </div>
      ))}
    </div>
  );
};
