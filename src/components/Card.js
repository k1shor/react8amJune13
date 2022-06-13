import React from 'react'
import './card.css'

const Card = () => {
    const items = [{
        name: "Real Me",
        price: "Rs. 13,000",
        description: "a very handy phone",
        image: "./image/realme.png"
    },
    {
        name: "Samsung Galaxy A21",
        price: "Rs. 15,000",
        description: "a very handy phone at affordable price",
        image: "./image/sam1.jpg"
    },
    {
        name: "Samsung Note 20",
        price: "Rs. 2,00,000",
        description: "a very handy phone",
        image: "./image/sam2.jpg"
    },
    {
        name: "Apple IPhone x13",
        price: "Rs. 2,13,000",
        description: "a deluxe phone",
        image: "./image/realme.png"
    }]




    return (
        <>
            <div className='container-fluid'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {
                        items.map((item, i) => {
                            return <div key={i}>
                                <div className="col shadow-lg">
                                    <div className="card shadow-lg">
                                        <div className='img-container'>
                                            <img src={`${item.image}`} className="card-img-top" alt={item.name} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <h6 className="card-title">{item.price}</h6>
                                            <p className="card-text text-truncate"
                                                title={item.description}>{item.description}</p>
                                            <button className='btn btn-warning'>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }


                </div>
            </div>

        </>
    )
}

export default Card