import React from 'react'

const CardComponent = (props) => {
    console.log(props);
    
    return (
        <div style={{textAlign:"center"}}>
            <h2>cardcomponant</h2>

            <div class="container mt-5">
                <div class="card custom-card" style={{ width: "16 rem;" }}>
                    <img
                        src="https://picsum.photos/300/200"
                        class="card-img-top"
                        alt="image"
                        style={{ height: "200px", width: "200px" }}
                    />
                    <div class="card-body">
                        <h5 class="card-title">{props.title || "title"}</h5>
                        <p class="card-text">{props.desc || "description"}</p>
                        <a href="#" class="btn custom-btn">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CardComponent
