const WatchList = ({watchList, removeMovie}) => {
    let myWatchList = watchList.map((item, index) => {
        return (
            <div className="watchListMovie" key={index}>
                <img src={item.image}></img>
                <button onClick={(()=>removeMovie(item))}>Remove from watchlist</button>
            </div>
        )
    })
    return <div>{myWatchList}</div>
    
}

export default WatchList;