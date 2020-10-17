const List = (props) => {
  return (
    <div className='pure-g pure-u-1-1 components-list'>
      <ul>
        {props.items.map((item) => (
          <li key={item.title}>
            <h3>
              <a href='{item.link}' target='_blank'>
                {item.title}
              </a>
              <div className='right'>
                <hr />
                <span>
                  {item.date.length <= 7 ? (
                    <span className='date'>{item.date}</span>
                  ) : (
                    <span className='term'>{item.date}</span>
                  )}
                </span>
              </div>
            </h3>
            {item.texts.map((t) => (
              <p className='sub' key={t}>
                {t}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
