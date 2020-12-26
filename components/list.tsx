import { getClassNameFunction } from 'utils'

import './list.scss'

const getClassName = getClassNameFunction('components-list')

export type Item = {
  title: string
  link: string
  date: string
  texts: string[]
}

const List: React.FC<{ items: Item[] }> = ({ items }) => (
  <ul className={`pure-g pure-u-1-1 ${getClassName()}`}>
    {items.map((item) => (
      <li className={getClassName('item')} key={item.title}>
        <h3 className={getClassName('item-title')}>
          <a className={getClassName('link')} href={item.link} target='_blank'>
            {item.title}
          </a>
          <div className={getClassName('right')}>
            <hr className={getClassName('line')} />
            <span className={getClassName('date-container')}>
              <span className={getClassName('date')}>{item.date}</span>
            </span>
          </div>
        </h3>
        {item.texts.map((t) => (
          <p className={getClassName('sub')} key={t}>
            {t}
          </p>
        ))}
      </li>
    ))}
  </ul>
)

export default List
