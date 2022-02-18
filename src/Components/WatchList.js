import "../index.css";

const WatchList = ({watchList, removeMovie}) => {
    let myWatchList = watchList.map((item, index) => {
        return (
            <div className="watch-list" key={index}>
                <img src={item.image}></img>
                <button class="btn btn-primary" onClick={(()=>removeMovie(item))}>Remove from my watch list</button>
            </div>
        )
    })
    if (myWatchList.length < 1) {
        return <p className="watchlist-empty">Your watch list is empty!</p>
    } else {
        return <div>{myWatchList}</div>
    }
}

export default WatchList;