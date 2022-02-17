import "../index.css";

const WatchList = ({watchList, removeMovie}) => {
    let myWatchList = watchList.map((item, index) => {
        return (
            <div key={index}>
                <img src={item.image}></img>
                <button onClick={(()=>removeMovie(item))}>Remove from watchlist</button>
            </div>
        )
    })
    if (myWatchList.length < 1) {
        return <p className="watchlist-empty">Your watch list is empty!</p>
    } else {
        return <div className="watch-list">{myWatchList}</div>
    }
}

export default WatchList;