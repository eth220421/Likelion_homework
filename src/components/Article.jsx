import './Article.css';

const Article = ({array}) => {
    return (
        <div id='article'>
            <div id='left'>
                <div id='media'>{array[0]}</div>
                <div id='title'>{array[1]}</div>
                <div id='content'>{array[2]}</div>
            </div>
            <div id='right'>
                <img src={array[3]} width={90} height={90} />
            </div>
        </div>
    )
}

export default Article;