const WatchList = ({watchList}) => {
    let myWatchList = watchList.map((item, index) => {
        return (
            <div key={index}>
                <img src={item.image}></img>
            </div>
        )
    })
    return <div>{myWatchList}</div>
    
}

export default WatchList;