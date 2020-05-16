import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
// import  GetImage from '../utlis/getImage'
class List extends React.Component {

    style = {
        border: "1px solid green",
        margin: 6,
        padding: 8,
        cursor: "pointer"
    };

    state = {
        items: Array.from({ length: 0 }),
        isListUpdated: false,
        detailedInfoIndex: -1
    }

    isLoaded = false; // Just for a single run

    /*
    <ul>

    </ul>
    */

    fetchData = async () => {
        return await fetch('https://www.randomtext.me/api')
            .then(response => response.json())
            .then((data) => {
                return fetch('https://picsum.photos/100')
                    .then(response => {
                        return {
                            type: data.type,
                            text_out: data.text_out,
                            time: data.time,
                            format: data.format,
                            number: data.number,
                            amount: data.amount,
                            img: response.url
                        }
                    })
            })
    }


    getMoreItems = () => {
        // console.log("HEY")
        var listOfPromises = [];
        var tempList = this.state.items;
        for (let index = 0; index < 10; index++) {
            var object = this.fetchData();
            listOfPromises.push(object)
            object.then((data) => {
                tempList.push(data)
            })
        }
        Promise.allSettled(listOfPromises)
            .then((results) => {
                // console.log(results);
                // console.log(tempList)
                this.setState({
                    items: tempList,

                })
            })
    }

    render() {
        if (!this.isLoaded) {
            this.getMoreItems();
            this.isLoaded = true
        }
        // this.fetchData()
        //     .then(result => {
        //         console.log(result)
        //     })
        return (
            <div>
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.getMoreItems}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    refreshFunction={this.getMoreItems}
                    pullDownToRefresh
                >
                    
                    {this.state.items.map((item, index) => (
                        <div className='card'>
                            <div
                                className="card-body"
                                onClick={() => {
                                    if (this.state.detailedInfoIndex === index) {
                                        this.setState({
                                            detailedInfoIndex: -1
                                        })
                                    }
                                    else {
                                        this.setState({
                                            detailedInfoIndex: index
                                        })
                                    }
                                }}
                                style= {this.style}
                                key={index}
                            >
                                <img src={item.img} alt='Random'></img>
                                <h3 className='card-title'>{item.type}</h3>
                                {this.state.detailedInfoIndex === index ? <p>{item.text_out}</p> : null}
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        );
    }
}

export default List;