import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div>
                <img src={!imageUrl ? "https://www.bing.com/images/search?view=detailV2&ccid=TX5OU%2bk2&id=F34251426B11C65DDBFCD94F9CA2E44554D0A64F&thid=OIP.TX5OU-k2Mssh8lUiL-rJ9AHaE8&mediaurl=https%3a%2f%2fmedia.boingboing.net%2fwp-content%2fuploads%2f2018%2f04%2fnewspaper.jpg&exph=1334&expw=2000&q=news+images&simid=608054970532566351&FORM=IRPRST&ck=6AECEBBBC062E31DB06E992D9F4BF092&selectedIndex=28&itb=0" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem